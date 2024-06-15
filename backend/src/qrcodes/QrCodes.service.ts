import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QrCodes } from './QrCodes.entity'
import { CreateQrCodeDTO } from './dto/QrCodes.dto'
import { Mesas } from 'src/mesas/Mesas.entity';

@Injectable()
export class QrCodesService {
  constructor(
    @InjectRepository(QrCodes)
    private qrcodeRepository: Repository<QrCodes>,
  ) {}

  async findAll(): Promise<QrCodes[]> {
    return await this.qrcodeRepository.find();
  }

  // privado pois não é utilizado pra nada além do deleteByMesa
  private async findByMesa(mesa: Mesas): Promise<QrCodes[]> {
    return await this.qrcodeRepository.findBy({
        idMesa: mesa
    })
  }

  async findByHash(hash: string): Promise<QrCodes> {
    return await this.qrcodeRepository.findOneBy({
        hash: hash
    })
  }
  
  async create(dto: CreateQrCodeDTO): Promise<QrCodes> {
    do { // evitar uma colisão, mas é uma chance astronômica de 1/16^6
      dto.hash = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
    } while (await this.findByHash(dto.hash))
    
    return await this.qrcodeRepository.save(
        this.qrcodeRepository.create(dto)
    )
  }

  async deleteByMesa(mesa: Mesas): Promise<void> {
    let qrs = await this.findByMesa(mesa)
    for (let qr of qrs) {
      await this.qrcodeRepository.delete(qr.idQr)
    }
  }
}
