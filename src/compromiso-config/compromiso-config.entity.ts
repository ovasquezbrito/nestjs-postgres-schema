/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'SACP2021', name: 'cpcomconf' })
export class CompromisoConfig extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 8 })
  formato: string;

  @Column('varchar', { length: 4 })
  prefijo: string;

  @Column({ type: 'int' })
  ninicio: number;

  @Column('varchar', { length: 4 })
  anno: string;

  @Column('varchar', { length: 3 })
  codtipo: string;

  @Column({ type: 'int' })
  cantdig: number;
}
