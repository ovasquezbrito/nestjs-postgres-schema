import { Injectable } from '@nestjs/common';
import { CompromisoConfigRepository } from './compromiso-config.repository';
import { CompromisoConfig } from './compromiso-config.entity';

@Injectable()
export class CompromisoConfigService {
  constructor(private repo: CompromisoConfigRepository) {}

  async getAll(): Promise<CompromisoConfig[]> {
    return this.repo.getAll();
  }
}
