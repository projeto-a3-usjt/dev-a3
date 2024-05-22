import { Controller, Body, Param, Get, Post, Put, Delete, HttpCode, HttpException, HttpStatus } from '@nestjs/common';
import { CreateMesaDTO, UpdateMesaDTO } from "./dto/Mesas.dto"
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
        try {
            let usuario = await this.cadastrosService.findById(idGarcom)
            let a = new CreateMesaDTO
            a = {garcom: usuario}
            return await this.mesasService.create(a)
        } catch (e) {
            throw new HttpException("ID do garçom inválido", HttpStatus.BAD_REQUEST)
        }
    }
}
