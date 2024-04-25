import { IsString, Length, IsInt } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateOpcaoPratoOpcaoDTO {
    @IsInt()
    idOpcao: number;
    
    @Length(1, 64)
    @IsString()
    opcao: string;

    @IsInt()
    idOpcaoIndex: number;
}

export class UpdateOpcaoPratoOpcaoDTO extends PartialType(CreateOpcaoPratoOpcaoDTO) {}