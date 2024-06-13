import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { QrCodesService } from './QrCodes.service';
import { QrcodesController } from './QrCodes.controller';
import { Mesas } from '../mesas/Mesas.entity';
import { QrCodes } from './QrCodes.entity'
import { MesasService } from 'src/mesas/mesas.service';


@Module({
    imports: [TypeOrmModule.forFeature([QrCodes]),
              TypeOrmModule.forFeature([Mesas])],
    providers: [QrCodesService, MesasService],
    controllers: [QrcodesController]
})
export class QrCodesModule {}
