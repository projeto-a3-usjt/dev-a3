import { Test, TestingModule } from '@nestjs/testing';
import { MesasService } from './mesas.service';

describe('MesasService', () => {
  let service: MesasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MesasService],
    }).compile();

    service = module.get<MesasService>(MesasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
