import { IsInt } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreatePratoOpcaoDTO {
    @IsInt()
    id: number;
    
    @IsInt()
    idPrato: number;

    @IsInt()
    idOpcaoIndex: number;
}

export class UpdatePratoOpcaoDTO extends PartialType(CreatePratoOpcaoDTO) {}