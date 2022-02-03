import { Body, Controller, Get, Post } from '@nestjs/common';
import { PeriodosService } from './periodos.service';
import { CreatePeriodoDto } from './dto/create-periodo.dto';

@Controller('periodos')
export class PeriodosController {
  constructor(private periodosService: PeriodosService) {}
  
  @Get()
  getTodos() {
    return this.periodosService.getTodos();
  }

  @Post()
  createPeriodo(@Body() createPeriodoDto: CreatePeriodoDto) {
    this.periodosService.createPeriodo(createPeriodoDto);
  }
}
