/* eslint-disable prettier/prettier */
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { Compromiso } from './compromiso.entity';
import { CompromisoDto } from './dto/compromiso.dto';
import { CompromisoConfig } from '../compromiso-config/compromiso-config.entity';
import { InternalServerErrorException, Logger } from '@nestjs/common';

@EntityRepository(Compromiso)
export class CompromisoRepository extends Repository<Compromiso> {

  private logger = new Logger('TaskRepository')

  async createCompromiso(_compromisoDto: CompromisoDto): Promise<Compromiso> {
    
    if (_compromisoDto.refcom === '########') {
      const repo = getRepository(CompromisoConfig);
      const cpConfig = await repo.find({ where: { codtipo: "NNN" } });
      const nInicio: number = cpConfig[0].ninicio + 1;
      const prefijo = cpConfig[0].prefijo;
      const cantidadFormato: number = cpConfig[0].formato.length;
      const valorNumerico = nInicio.toString();
      const numeroCompromiso: string = prefijo + valorNumerico.padStart(cantidadFormato, "0");
      _compromisoDto.refcom = numeroCompromiso;
    }
    
    const compromiso = new Compromiso();
    compromiso.refcom = _compromisoDto.refcom;
    compromiso.tipcom = _compromisoDto.tipcom;
    compromiso.feccom = _compromisoDto.feccom;
    compromiso.refprc = _compromisoDto.refprc;
    compromiso.descom = _compromisoDto.descom;
    compromiso.moncom = _compromisoDto.moncom;
    compromiso.stacom = _compromisoDto.stacom;
    compromiso.cedrif = _compromisoDto.cedrif;
    compromiso.codubi = _compromisoDto.codubi;
    compromiso.anno = _compromisoDto.anno;
    compromiso.usuario = _compromisoDto.usuario;
    compromiso.codorg = _compromisoDto.codorg;

    try {
      await compromiso.save();
    } catch (error) {
      this.logger.error(`Fallo al crear un compromiso "${compromiso.refcom}". Data: ${_compromisoDto}`);
      throw new InternalServerErrorException();
    }
    

    return compromiso;
  }
}