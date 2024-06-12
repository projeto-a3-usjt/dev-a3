import { Test, TestingModule } from '@nestjs/testing';
import { QrCodesService } from './qr-codes.service';

describe('QrCodesService', () => {
  let service: QrCodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QrCodesService],
    }).compile();

    service = module.get<QrCodesService>(QrCodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
