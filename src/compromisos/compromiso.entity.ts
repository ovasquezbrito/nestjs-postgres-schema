/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CompromisoDetail } from '../compromiso-details/compromiso-detail.entity';

@Entity({ schema: 'SACP2021', name: 'cpcompro' })
export class Compromiso extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 8 })
  refcom: string;

  @Column('varchar', { length: 4 })
  tipcom: string;

  @Column({ type: 'date' })
  feccom: Date;

  @Column('varchar', { length: 10 })
  refprc: string;

  @Column({ type: 'text' })
  descom: string;

  @Column({ type: 'float8' })
  moncom: number;

  @Column({ type: 'varchar', length: 1, default: 'A' })
  stacom: string;

  @Column('varchar', { length: 12 })
  cedrif: string;

  @Column('varchar', { length: 17 })
  codubi: string;

  @Column('varchar', { length: 4 })
  anno: string;

  @Column('varchar', { length: 20 })
  usuario: string;

  @Column('varchar', { length: 11 })
  codorg: string;

  @OneToMany((type) => CompromisoDetail, compromisodetail => compromisodetail.compromiso)
  compromisodetails: CompromisoDetail[];
}
