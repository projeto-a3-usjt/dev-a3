import { Test, TestingModule } from '@nestjs/testing';
import { QrcodesController } from './qrcodes.controller';

describe('QrcodesController', () => {
  let controller: QrcodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QrcodesController],
    }).compile();

    controller = module.get<QrcodesController>(QrcodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
