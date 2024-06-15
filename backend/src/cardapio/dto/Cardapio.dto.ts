import { IsString, Length, IsBoolean, IsInt, IsDecimal } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreatePratoDTO {
    @IsInt()
    idPrato: number;

    @Length(1, 64)
    @IsString()
    nomePrato: string;

    @Length(1, 512)
    @IsString()
    linkImagem: string;
    
    @Length(1, 256)
    @IsString()
    descricao: string;

    @IsDecimal({decimal_digits: "2"})
    preco: number;

    @IsInt()
    idTipo: number;
}

export class UpdatePratoDTO extends PartialType(CreatePratoDTO) {}