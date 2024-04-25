import { IsString, Length, IsInt } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateOpcaoPratoDTO {
    @IsInt()
    idOpcaoIndex: number;

    @Length(1, 64)
    @IsString()
    titulo: string;
    
    @Length(1, 64)
    @IsString()
    comentario: string;
}

export class UpdateOpcaoPratoDTO extends PartialType(CreateOpcaoPratoDTO) {}