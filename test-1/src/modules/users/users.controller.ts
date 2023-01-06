import { UserCreateDto } from './dtos/user-create.dto';
import { UserUpdateDto } from './dtos/user-update.dto';
import { UsersService } from './users.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() userCreateDto: UserCreateDto) {
    return await this.usersService.create(userCreateDto);
  }

  @Get('/:id')
  async findOne(@Param('id') userId: number) {
    return await this.usersService.findOne(userId);
  }

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Delete('/:id')
  async delete(@Param('id') userId: number) {
    return await this.usersService.delete(userId);
  }

  @Put('/:id')
  async update(
    @Param('id') userId: number,
    @Body() userUpdateDto: UserUpdateDto,
  ) {
    return await this.usersService.update(userId, userUpdateDto);
  }
}
