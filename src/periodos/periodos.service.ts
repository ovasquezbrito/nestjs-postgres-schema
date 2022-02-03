/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePeriodoDto } from './dto/create-periodo.dto';
import { Periodo } from './periodo.model';
import { PeriodoRepository } from './periodo.repository';

@Injectable()
export class PeriodosService {
  constructor(
    @InjectRepository(PeriodoRepository)
    private periodoRepository: PeriodoRepository
  ) { }

  async getTodos() {
    return await this.periodoRepository.getAll();
  }

  createPeriodo(createPeriodoDto: CreatePeriodoDto) {
    const periodo: Periodo = {
      codemp: createPeriodoDto.codemp,
      nomemp: createPeriodoDto.nomemp,
      diremp: createPeriodoDto.diremp,
      fini: createPeriodoDto.ffin,
      ffin: createPeriodoDto.ffin,
      aperiodo: createPeriodoDto.aperiodo,
      tbase: createPeriodoDto.tbase,
      estado: createPeriodoDto.estado,
    };

    return periodo;
  }
}
