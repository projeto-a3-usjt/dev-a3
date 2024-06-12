import { IsString, Length, IsNotEmpty, IsInt } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { Mesas } from "src/mesas/Mesas.entity";

export class CreateQrCodeDTO {

    @IsInt()
    idQr?: number;

    @IsString()
    @Length(6, 6)
    hash?: string;

    @IsString()
    @Length(1, 32)
    @IsNotEmpty()
    readonly nome: string;

    @IsNotEmpty()
    readonly idMesa: Mesas;    
}

export class UpdateQrCodeDTO extends PartialType(CreateQrCodeDTO) {}