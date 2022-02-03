/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: "USER_SACP", name: "periodo" })
export class Periodo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codemp: string;

  @Column()
  nomemp: string;

  @Column()
  diremp: string;

  @Column()
  fini: string;

  @Column()
  ffin: string;

  @Column()
  aperiodo: string;

  @Column()
  tbase: string;

  @Column()
  estado: string;
}