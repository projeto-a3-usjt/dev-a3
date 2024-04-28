import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cadastros } from './Cadastros.entity';
import { CreateCadastroDTO, UpdateCadastroDTO } from './dto/Cadastros.dto';

@Injectable()
export class CadastrosService {
    constructor(
        @InjectRepository(Cadastros)
        private cadastrosRepository: Repository<Cadastros>,
    ) {}

    async findAll(): Promise<Cadastros[]> {
        return await this.cadastrosRepository.find();
    }

    async create(createCadastroDTO: CreateCadastroDTO): Promise<Cadastros> {
        try {
            return await this.cadastrosRepository.save(
                this.cadastrosRepository.create(createCadastroDTO),
            );
        } catch (e) {
            if (e.code === 'ER_DUP_ENTRY') {
                throw new HttpException('Usuário já cadastrado', HttpStatus.BAD_REQUEST);
            } else {
                throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
            }
        }
    }

    async update(id: string, updateCadastroDTO: UpdateCadastroDTO): Promise<void> {
        const result = await this.cadastrosRepository.update(id, updateCadastroDTO);
        if (result.affected === 0) {
            throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
        }
    }

    async delete(id: string): Promise<void> {
        const result = await this.cadastrosRepository.delete(id);
        if (result.affected === 0) {
            throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
        }
    }

    async login(username: string, senha: string): Promise<void> {
        const result = await this.cadastrosRepository.findOne({ where: { username: username } })
        if (!result || result.senha !== senha) {
           throw new HttpException('Login ou senha incorretos', HttpStatus.FORBIDDEN);
        }
    }
}
