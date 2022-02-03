import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Compromiso } from './compromiso.entity';
import { CompromisoRepository } from './compromiso.repository';
import { CompromisoDto } from './dto/compromiso.dto';

@Injectable()
export class CompromisosService {
  constructor(
    @InjectRepository(CompromisoRepository)
    private compromisoRepository: CompromisoRepository,
  ) {}
  async getCompromisos() {
    return await this.compromisoRepository.find({
      relations: ['compromisodetails'],
    });
  }
  async getCompromisoPorId(id: number): Promise<Compromiso> {
    const found = await this.compromisoRepository.findOne(id, {
      relations: ['compromisodetails'],
    });

    if (!found) {
      throw new NotFoundException(`Compromiso con el ID ${id} no existe`);
    }

    return found;
  }
  async createCompromiso(compromisoDto: CompromisoDto): Promise<Compromiso> {
    return await this.compromisoRepository.createCompromiso(compromisoDto);
  }
}
