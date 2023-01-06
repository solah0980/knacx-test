import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from '../address/address.module';
import { HistoryTakingModule } from '../history-taking/history-taking.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    AddressModule,
    HistoryTakingModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
