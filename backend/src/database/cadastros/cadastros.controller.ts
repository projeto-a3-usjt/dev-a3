import { Controller, Body, Param, Get, Post, Put, Delete } from '@nestjs/common';
import { CreateCadastroDTO, UpdateCadastroDTO } from './dto/Cadastros.dto';
import { CadastrosService } from './cadastros.service';

@Controller('cadastros')
export class CadastrosController {
    constructor(private cadastrosService: CadastrosService) {}

    @Get()
    async findAll() {
        return await this.cadastrosService.findAll();
    }

    @Post()
    async create(@Body() createCadastroDTO: CreateCadastroDTO) {
        return await this.cadastrosService.create(createCadastroDTO);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateCadastroDTO: UpdateCadastroDTO) {
        return await this.cadastrosService.update(id, updateCadastroDTO);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.cadastrosService.delete(id);
    }

    @Post('login')
    async login(@Body() user: string, @Body() password: string) {
        return await this.cadastrosService.login(user, password);
    }
}
