import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MesasService } from './mesas.service';
import { MesasController } from './mesas.controller';
import { Mesas } from './Mesas.entity';
import { CadastrosService } from '../cadastros/cadastros.service';
import { Cadastros } from '../cadastros/Cadastros.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Mesas]),
              TypeOrmModule.forFeature([Cadastros])],
    controllers: [MesasController],
    providers: [MesasService, CadastrosService],
})
export class MesasModule {}