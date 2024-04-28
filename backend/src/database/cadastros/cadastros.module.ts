import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CadastrosService } from './cadastros.service';
import { CadastrosController } from './cadastros.controller';
import { Cadastros } from './Cadastros.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Cadastros])],
    controllers: [CadastrosController],
    providers: [CadastrosService],
})
export class CadastrosModule {}
