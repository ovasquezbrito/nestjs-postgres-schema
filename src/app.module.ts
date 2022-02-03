/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { PeriodosModule } from './periodos/periodos.module';
import { CompromisosModule } from './compromisos/compromisos.module';
import { CompromisoConfigModule } from './compromiso-config/compromiso-config.module';
import { CompromisoDetailsModule } from './compromiso-details/compromiso-details.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), PeriodosModule, AuthModule, CompromisosModule, CompromisoConfigModule, CompromisoDetailsModule],
})
export class AppModule {}
