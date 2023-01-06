import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { User } from './modules/users/user.entity';
import { AddressModule } from './modules/address/address.module';
import { Address } from './modules/address/address.entity';
import { HistoryTakingModule } from './modules/history-taking/history-taking.module';
import { HistoryTaking } from './modules/history-taking/history-taking.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'knacx-test',
      entities: [User, Address, HistoryTaking],
      synchronize: true,
    }),
    UsersModule,
    AddressModule,
    HistoryTakingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
