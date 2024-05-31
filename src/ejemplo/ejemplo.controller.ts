import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EjemploService } from './ejemplo.service';

@Controller('ejemplo')
export class EjemploController {
  constructor(private readonly ejemploService: EjemploService) { }

  @Get(':id')
  async findOne(@Param('matricula') matricula: string) {
    return this.ejemploService.EatApiDocente(matricula)
  }
}
