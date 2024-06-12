import { Module } from '@nestjs/common';
import { QrCodesService } from './QrCodes.service';

@Module({
  providers: [QrCodesService]
})
export class QrCodesModule {}
