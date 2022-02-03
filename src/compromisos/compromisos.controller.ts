import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Compromiso } from './compromiso.entity';
import { CompromisosService } from './compromisos.service';
import { CompromisoDto } from './dto/compromiso.dto';

@Controller('compromisos')
export class CompromisosController {
  constructor(private _compromisoService: CompromisosService) {}

  private logger = new Logger('CompromisosController');

  @Get()
  async getCompromisos() {
    return await this._compromisoService.getCompromisos();
  }

  @Get('/:id')
  async getCompromisoPorId(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Compromiso> {
    return await this._compromisoService.getCompromisoPorId(id);
  }

  @Post()
  async createCompromiso(
    @Body() compromisoDto: CompromisoDto,
  ): Promise<Compromiso> {
    this.logger.verbose(
      `Creando un nuevo compromiso. Data: ${JSON.stringify(compromisoDto)} `,
    );
    return await this._compromisoService.createCompromiso(compromisoDto);
  }
}
