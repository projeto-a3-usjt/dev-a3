import { Test, TestingModule } from '@nestjs/testing';
import { CadastrosController } from './cadastros.controller';

describe('CadastrosController', () => {
  let controller: CadastrosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CadastrosController],
    }).compile();

    controller = module.get<CadastrosController>(CadastrosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
