import { Test, TestingModule } from '@nestjs/testing';
import { CadastrosService } from './cadastros.service';

describe('CadastrosService', () => {
  let service: CadastrosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CadastrosService],
    }).compile();

    service = module.get<CadastrosService>(CadastrosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
