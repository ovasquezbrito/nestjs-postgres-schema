import { EntityRepository, Repository } from 'typeorm';
import { CompromisoDetail } from './compromiso-detail.entity';

@EntityRepository()
export class CompromisoDetailRepository extends Repository<CompromisoDetail> {}
