/* eslint-disable prettier/prettier */
import { IsString, MaxLength, MinLength } from 'class-validator';

export class CompromisoDto {

  @IsString()
  @MinLength(8)
  @MaxLength(8)
  refcom: string;

  @IsString()
  @MinLength(4)
  @MaxLength(4)
  tipcom: string;

  feccom: Date;

  @IsString()
  @MinLength(8)
  @MaxLength(8)
  refprc: string;

  descom: string;
  moncom: number;
  stacom: string;

  @IsString()
  @MinLength(8)
  @MaxLength(15)
  cedrif: string;

  @IsString()
  @MinLength(17)
  @MaxLength(17)
  codubi: string;

  @IsString()
  @MinLength(4)
  @MaxLength(4)
  anno: string;

  @IsString()
  usuario: string;

  @IsString()
  codorg: string;
}