import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompromisoConfigController } from './compromiso-config.controller';
import { CompromisoConfigService } from './compromiso-config.service';
import { CompromisoConfigRepository } from './compromiso-config.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CompromisoConfigRepository])],
  controllers: [CompromisoConfigController],
  providers: [CompromisoConfigService],
})
export class CompromisoConfigModule {}
