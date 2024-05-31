import { Module } from '@nestjs/common';
import { EjemploService } from './ejemplo.service';
import { EjemploController } from './ejemplo.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [EjemploController],
  providers: [EjemploService],
})
export class EjemploModule { }
