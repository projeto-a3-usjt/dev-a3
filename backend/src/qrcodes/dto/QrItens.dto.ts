import { IsInt } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateQrItemDTO {
    @IsInt()
    id: number;

    @IsInt()
    idPrato: number;

    @IsInt()
    idQr: number
}

export class UpdateQrItemDTO extends PartialType(CreateQrItemDTO) {}