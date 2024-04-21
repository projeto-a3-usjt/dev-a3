import { IsString, Length, IsNotEmpty } from "class-validator";


export class QrCodeDTO {

    @IsString()
    @Length(10, 127)
    @IsNotEmpty()
    readonly id: string;

    // @IsString()
    // @Length(6)
    // @IsNotEmpty()
    // readonly hash: string;

    // @IsString()
    // @Length(32)
    // @IsNotEmpty()
    // readonly nome: string;

    // @IsString()
    // @Length(10, 127)
    // @IsNotEmpty()
    // readonly idMesa: string;    
}