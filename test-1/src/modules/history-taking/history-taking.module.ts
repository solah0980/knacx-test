import { Module } from '@nestjs/common';
import { HistoryTakingService } from './history-taking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryTaking } from './history-taking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HistoryTaking])],
  providers: [HistoryTakingService],
  exports: [HistoryTakingService],
})
export class HistoryTakingModule {}
