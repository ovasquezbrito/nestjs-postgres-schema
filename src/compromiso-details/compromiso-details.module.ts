import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompromisoDetailsController } from './compromiso-details.controller';
import { CompromisoDetailsService } from './compromiso-details.service';
import { CompromisoDetail } from './compromiso-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompromisoDetail])],
  controllers: [CompromisoDetailsController],
  providers: [CompromisoDetailsService],
})
export class CompromisoDetailsModule {}
