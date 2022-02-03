import { Module } from '@nestjs/common';
import { CompromisosController } from './compromisos.controller';
import { CompromisosService } from './compromisos.service';
import { CompromisoRepository } from './compromiso.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CompromisoRepository])],
  controllers: [CompromisosController],
  providers: [CompromisosService],
})
export class CompromisosModule {}
