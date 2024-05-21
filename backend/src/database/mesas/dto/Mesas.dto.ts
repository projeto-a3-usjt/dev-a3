import { IsString, Length, IsNotEmpty } from "class-validator";

import { PartialType } from '@nestjs/mapped-types';

export class CreateMesaDTO {

    @IsString()
    @Length(10, 127)
    @IsNotEmpty()
    readonly idMesa: string;

    @IsString()
    @Length(36)
    @IsNotEmpty()
    readonly idGarcom: string;    
}

export class UpdateMesaDTO extends PartialType(CreateMesaDTO) {}