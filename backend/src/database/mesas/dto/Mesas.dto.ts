import { IsInt } from "class-validator";

import { PartialType } from '@nestjs/mapped-types';
import { Cadastros } from "src/database/cadastros/Cadastros.entity";

export class CreateMesaDTO {

    @IsInt()
    idMesa: number;

    idGarcom: Cadastros;
}

export class UpdateMesaDTO extends PartialType(CreateMesaDTO) {}