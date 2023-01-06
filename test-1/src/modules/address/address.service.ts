import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './address.entity';
import { Repository } from 'typeorm';
import { AddressCreateDto } from './dtos/address-create.dto';
import { AddressUpdateDto } from './dtos/address-update.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}

  async create(addressCreateDto: AddressCreateDto) {
    const address = await this.addressRepository.save(addressCreateDto);
    return address;
  }

  async update(addressUpdateDto: AddressUpdateDto) {
    const address = await this.addressRepository.update(
      addressUpdateDto.id,
      addressUpdateDto,
    );
    return address;
  }

  async delete(addressId: number) {
    const address = await this.addressRepository.delete(addressId);

    return addressId;
  }
}
