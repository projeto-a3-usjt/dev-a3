import { IsString, Length, IsInt } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateTipoPratoDTO {
    @IsInt()
    idTipo: number;
    
    @Length(1, 32)
    @IsString()
    nome: string;
}

export class UpdateTipoPratoDTO extends PartialType(CreateTipoPratoDTO) {}