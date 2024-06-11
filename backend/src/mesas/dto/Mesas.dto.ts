import { IsInt } from "class-validator";

import { Cadastros } from "src/cadastros/Cadastros.entity";

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