/* eslint-disable prettier/prettier */
import { Periodo } from './periodo.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Periodo)
export class PeriodoRepository extends Repository<Periodo> {

  async getAll() {
    return await this.createQueryBuilder()
    .select("periodo")
    .from(Periodo, "periodo")
    .getMany();
    
    
  }
  
}