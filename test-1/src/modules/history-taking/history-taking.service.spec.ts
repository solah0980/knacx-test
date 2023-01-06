import { Test, TestingModule } from '@nestjs/testing';
import { HistoryTakingService } from './history-taking.service';

describe('HistoryTakingService', () => {
  let service: HistoryTakingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistoryTakingService],
    }).compile();

    service = module.get<HistoryTakingService>(HistoryTakingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
