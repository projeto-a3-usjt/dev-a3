import { IsString, Length, IsNotEmpty, IsInt } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class CreateQrCodeDTO {

    @IsInt()
    @IsNotEmpty()
    readonly idQr: number;

    @IsString()
    @Length(6, 6)
    @IsNotEmpty()
    readonly hash: string;

    @IsString()
    @Length(1, 32)
    @IsNotEmpty()
    readonly nome: string;

    @IsInt()
    @IsNotEmpty()
    readonly idMesa: number;    
}

export class UpdateQrCodeDTO extends PartialType(CreateQrCodeDTO) {}