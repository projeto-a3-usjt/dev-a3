import { Module } from '@nestjs/common';
import { QrCodeModule } from './QrCode/qrcode.module';
import { MesaModule } from './Mesa/mesa.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, MesaModule, QrCodeModule],
})
export class AppModule {}
