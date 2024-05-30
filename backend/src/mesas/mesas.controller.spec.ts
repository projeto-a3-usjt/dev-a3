import { Test, TestingModule } from '@nestjs/testing';
import { MesasController } from './mesas.controller';

describe('MesasController', () => {
  let controller: MesasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MesasController],
    }).compile();

    controller = module.get<MesasController>(MesasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
