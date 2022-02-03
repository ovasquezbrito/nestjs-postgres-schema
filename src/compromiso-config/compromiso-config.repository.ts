/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { CompromisoConfig } from './compromiso-config.entity';

@EntityRepository(CompromisoConfig)
export class CompromisoConfigRepository extends Repository<CompromisoConfig> {

  async getAll(): Promise<CompromisoConfig[]> {
    return await this.createQueryBuilder()
    .select("cpcomconf")
    .from(CompromisoConfig, "cpcomconf")
    .getMany();
  }
  
}