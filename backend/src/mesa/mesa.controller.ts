import { Controller, Post, Body } from '@nestjs/common';
import { MesaService } from './mesa.service';
import { MesaDTO } from './mesa.DTO';


@Controller()
export class MesaController {
  constructor(private readonly mesaService: MesaService) {}

  @Post('connectionRestaurant/connectTable')
  async createConnectionTable(@Body() mesaDTO: MesaDTO) {
    this.mesaService.createConnectionTable(mesaDTO);
  }
}
