import { IsInt } from "class-validator";

import { PartialType } from '@nestjs/mapped-types';
import { Cadastros } from "src/database/cadastros/Cadastros.entity";

export class CreateMesaDTO {

    @IsInt()
    idMesa?: number;

    // contraditório: "id" no nome, mas é um tipo Cadastros
    garcom: Cadastros;
}

export class UpdateMesaDTO extends PartialType(CreateMesaDTO) {}