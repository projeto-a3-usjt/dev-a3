import { Module } from '@nestjs/common';
import { QrCodesService } from './QrCodes.service';
import { QrcodesController } from './QrCodes.controller';

@Module({
  providers: [QrCodesService],
  controllers: [QrcodesController]
})
export class QrCodesModule {}
