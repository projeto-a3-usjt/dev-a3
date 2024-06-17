import { Controller, Body, Param, Get, Post, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CreateQrCodeDTO } from './dto/QrCodes.dto'
import { QrCodesService } from './QrCodes.service'
import { MesasService } from 'src/mesas/mesas.service';


@Controller('qrcodes')
export class QrcodesController {
    constructor(private qrcodesService: QrCodesService,
                private mesasService: MesasService) {}

    @Get()
    async findAll() {
        return await this.qrcodesService.findAll();
    }

    @Get(':hash')
    async findByHash(@Param('hash') hash: string) {
        return await this.qrcodesService.findByHash(hash)
    }

    @Post(':id')
    async create(@Param('id') idmesa: number,
                 @Body('nome') nome: string) {
        let mesa = await this.mesasService.findById(idmesa)
        if (mesa) {
            let dto = new CreateQrCodeDTO
            dto = { idMesa: mesa, nome: nome }
            return await this.qrcodesService.create(dto)
        } else {
            throw new HttpException("Mesa inválida", HttpStatus.BAD_REQUEST)
        }
    }

    @Delete('/mesa/:id')
    async deleteByMesa(@Param('id') idmesa: number) {
        let mesa = await this.mesasService.findById(idmesa)
        if (mesa) {
            await this.qrcodesService.deleteByMesa(mesa)
        } else {
            throw new HttpException("Mesa inválida", HttpStatus.BAD_REQUEST)
        }
    }
}
