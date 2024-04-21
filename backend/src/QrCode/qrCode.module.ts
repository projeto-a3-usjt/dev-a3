import { Module } from '@nestjs/common';
import { QrCodeService } from './qrCode.service';
import { QrCodeController } from './qrcode.controller';
import { DatabaseModule } from '../database/database.module';


@Module({
  imports: [DatabaseModule],
  controllers: [QrCodeController],
  providers: [QrCodeService],
})
export class QrCodeModule {}
