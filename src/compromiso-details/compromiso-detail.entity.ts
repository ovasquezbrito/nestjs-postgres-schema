/* eslint-disable prettier/prettier */
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Compromiso } from '../compromisos/compromiso.entity';

@Entity({ schema: 'SACP2021', name: 'cpcomdet' })
export class CompromisoDetail extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', default: 0 })
  id_cpcompro: number;

  @Column('varchar', { length: 8 })
  refcom: string;

  @Column('varchar', { length: 35 })
  codpre: string;

  @Column({ type: 'float8', default: 0 })
  monimp: number;

  @Column({ type: 'float8', default: 0 })
  moncau: number;

  @Column({ type: 'float8', default: 0 })
  monpag: number;

  @Column({ type: 'float8', default: 0 })
  monaju: number;

  @Column({ type: 'varchar', length: 1, default: 'A' })
  staimp: string;

  @Column('varchar', { length: 10 })
  refere: string;

  @Column({ type: 'varchar', length: 1, default: 'P' })
  tipopart: string;

  @Column('varchar', { length: 4 })
  fuefin: string;

  @ManyToOne(type => Compromiso, compromiso => compromiso.compromisodetails, {cascade: true})
  @JoinColumn({ name: 'id_cpcompro'})
  compromiso: Compromiso;
}
