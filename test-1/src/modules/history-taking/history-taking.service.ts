import { Injectable } from '@nestjs/common';
import { HistoryTaking } from './history-taking.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HistoryTakingCreateDto } from './dtos/history-taking-create.dto';
import { HistoryTakingUpdateDto } from './dtos/history-taking-update.dto';

@Injectable()
export class HistoryTakingService {
  constructor(
    @InjectRepository(HistoryTaking)
    private historyTakingRepository: Repository<HistoryTaking>,
  ) {}

  async create(historyTakingCreateDto: HistoryTakingCreateDto) {
    const historyTaking = await this.historyTakingRepository.save(
      historyTakingCreateDto,
    );
    return historyTaking;
  }

  async update(historyTakingUpdateDto: HistoryTakingUpdateDto) {
    const historyTaking = await this.historyTakingRepository.update(
      historyTakingUpdateDto.id,
      historyTakingUpdateDto,
    );
    return historyTaking;
  }

  async delete(historyTakingId: number) {
    const historyTaking = await this.historyTakingRepository.delete(
      historyTakingId,
    );

    return historyTakingId;
  }
}
