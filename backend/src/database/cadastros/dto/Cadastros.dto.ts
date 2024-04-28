import { IsUUID, IsString, Length, Matches, IsBoolean } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateCadastroDTO {
    @IsUUID("4")
    idUsuario: string;

    @Length(1, 32)
    @IsString()
    username: string;

    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)
    @IsString()
    senha: string;

    @IsString()
    nome: string;

    @IsBoolean()
    tipoConta: boolean;
}

export class UpdateCadastroDTO extends PartialType(CreateCadastroDTO) {}