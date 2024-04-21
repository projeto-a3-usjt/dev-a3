import { IsString, Length, IsNotEmpty } from "class-validator";


export class MesaDTO {

    @IsString()
    @Length(10, 127)
    @IsNotEmpty()
    readonly idMesa: string;

    @IsString()
    @Length(36)
    @IsNotEmpty()
    readonly idGarcom: string;    
}
