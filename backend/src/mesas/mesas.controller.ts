import { Controller, Body, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { CreateMesaDTO } from "./dto/Mesas.dto"
import { MesasService } from "./mesas.service"
import { CadastrosService } from "../cadastros/cadastros.service"

@Controller('mesas')
export class MesasController {
    constructor(private mesasService: MesasService,
                // não faço a menor ideia se é assim que se faz isso
                private cadastrosService: CadastrosService) {}

    @Get()
    async findAll() {
        return await this.mesasService.findAll();
    }

    @Post()
    async create(@Body('id_usuario') idGarcom: string) {
        let usuario = await this.cadastrosService.findById(idGarcom)
        let a = new CreateMesaDTO
        a = {garcom: usuario}
        return await this.mesasService.create(a)
    }

    @Put(':id')
    async update(@Param('id') mesa: number,
                 @Body('id_usuario') idGarcom: string) {
        let usuario = await this.cadastrosService.findById(idGarcom)
        return await this.mesasService.update(mesa, usuario)
    }

    @Delete(':id')
    async delete(@Param('id') mesa: number) {
        return await this.mesasService.delete(mesa)
    }
}
