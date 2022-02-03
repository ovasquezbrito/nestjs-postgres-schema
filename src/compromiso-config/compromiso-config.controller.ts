import { Controller, Get } from '@nestjs/common';
import { CompromisoConfigService } from './compromiso-config.service';

@Controller('compromiso_config')
export class CompromisoConfigController {
  constructor(private _service: CompromisoConfigService) {}

  @Get()
  async getAll() {
    return this._service.getAll();
  }
}
