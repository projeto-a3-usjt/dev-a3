import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AppGateway } from './mesas/mesa.gateway';
import { MesasModule } from './mesas/mesas.module';
import { CadastrosModule } from './cadastros/cadastros.module';
import { QrCodesModule } from './qrcodes/QrCodes.module';

@Module({
  imports: [DatabaseModule, MesasModule, CadastrosModule, QrCodesModule],
  controllers: [],
  providers: [AppGateway],
})
export class AppModule {}
