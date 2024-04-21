import { Injectable } from '@nestjs/common';
import { MesaDTO } from './mesa.DTO';
// import { MesaEntity } from './mesa.entity';


@Injectable()
export class MesaService {

  createConnectionTable(mesaDTO: MesaDTO) {
    console.log(mesaDTO);
  }
}
