/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PeriodosController } from './periodos.controller';
import { PeriodosService } from './periodos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeriodoRepository } from './periodo.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PeriodoRepository])
  ],
  controllers: [PeriodosController],
  providers: [PeriodosService]
})
export class PeriodosModule {}
