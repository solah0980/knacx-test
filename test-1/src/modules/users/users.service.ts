import { HistoryTaking } from '../history-taking/history-taking.entity';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository, getConnection } from 'typeorm';
import { UserCreateDto } from './dtos/user-create.dto';
import { AddressService } from '../address/address.service';
import { HistoryTakingService } from '../history-taking/history-taking.service';
import { UserUpdateDto } from './dtos/user-update.dto';
import * as _ from 'lodash';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private addressService: AddressService,
    private historyTakingService: HistoryTakingService,
  ) {}

  async create(userCreateDto: UserCreateDto) {
    try {
      const address = await this.addressService.create(userCreateDto.address);
      const historyTaking = await this.historyTakingService.create(
        userCreateDto.historyTaking,
      );
      const userModel = {
        ...userCreateDto,
        addressId: address.id,
        historyTaking: historyTaking,
      };

      const user = await this.usersRepository.save(userModel);

      return { data: { userId: user.id } };
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }

  async findOne(userId: number) {
    const user = await this.usersRepository
      .createQueryBuilder('user')
      .innerJoinAndSelect('user.address', 'address')
      .innerJoinAndSelect('user.historyTaking', 'historyTaking')
      .where('user.id = :userId', { userId: userId })
      .getOne();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return { data: user };
  }

  async findAll() {
    const user = await this.usersRepository.find();
    return { datas: user };
  }

  async delete(userId: number) {
    const user = await this.usersRepository
      .createQueryBuilder('user')
      .where('user.id = :userId', { userId: userId })
      .getOne();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.usersRepository.delete(userId);
    await this.addressService.delete(user.addressId);
    await this.historyTakingService.delete(user.historyTakingId);

    return { data: { userId: userId } };
  }

  async update(userId: number, userUpdateDto: UserUpdateDto) {
    const user = await this.usersRepository
      .createQueryBuilder('user')
      .where('user.id = :userId', { userId: userId })
      .getOne();
    if (!user) {
      throw new NotFoundException('User not found');
    }

    try {
      await this.usersRepository.update(
        userId,
        _.omit(userUpdateDto, ['address', 'historyTaking']),
      );

      await this.addressService.update(
        _.pick(userUpdateDto, ['address']).address,
      );

      await this.historyTakingService.update(
        _.pick(userUpdateDto, ['historyTaking']).historyTaking,
      );

      return { data: { userId: userId } };
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }
}
