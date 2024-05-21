import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mesas } from './Mesas.entity';
import { CreateMesaDTO, UpdateMesaDTO } from './dto/Mesas.dto';

@Injectable()
export class MesasService {
  constructor(
    @InjectRepository(Mesas)
    private mesasRepository: Repository<Mesas>,
  ) {}

  async findAll(): Promise<Mesas[]> {
    return await this.mesasRepository.find();
  }

  async create(createMesaDTO: CreateMesaDTO): Promise<Mesas> {
    try {
      return await this.mesasRepository.save(
        this.mesasRepository.create(createMesaDTO),
      );
    } catch (e) {
      if (e.code === 'ER_DUP_ENTRY') {
        throw new HttpException(
          'Mesa já cadastrada',
          HttpStatus.BAD_REQUEST,
        );
      } else {
        throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
      }
    }
  }

  async update(
    idGarcom: string,
    updateMesaDTO: UpdateMesaDTO,
  ): Promise<void> {
    const result = await this.mesasRepository.update(idGarcom, updateMesaDTO);
    if (result.affected === 0) {
      throw new HttpException('Mesa não encontrada', HttpStatus.NOT_FOUND);
    }
  }

  async delete(id: string): Promise<void> {
    const result = await this.mesasRepository.delete(id);
    if (result.affected === 0) {
      throw new HttpException('Mesa não encontrada', HttpStatus.NOT_FOUND);
    }
  }
}
