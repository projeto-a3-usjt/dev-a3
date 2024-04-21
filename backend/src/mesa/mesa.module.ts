import { Module } from '@nestjs/common';
import { MesaController } from './mesa.controller';
import { MesaService } from './mesa.service';
import { DatabaseModule } from '../database/database.module';


@Module({
  imports: [DatabaseModule],
  controllers: [MesaController],
  providers: [MesaService],
})
export class MesaModule {}
