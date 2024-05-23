import { IsInt } from "class-validator";

import { PartialType } from '@nestjs/mapped-types';
import { Cadastros } from "src/database/cadastros/Cadastros.entity";

export class CreateMesaDTO {

    @IsInt()
    idMesa?: number;

    garcom: Cadastros;
}

export class UpdateMesaDTO {

    @IsInt()
    idMesa: number;

    garcom: Cadastros;
}