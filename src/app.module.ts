import { Module } from '@nestjs/common';
import { EjemploModule } from './ejemplo/ejemplo.module';

@Module({
  imports: [EjemploModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
