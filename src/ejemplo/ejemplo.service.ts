import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class EjemploService {
  constructor(private readonly httpService: HttpService) { }

  async EatApiDocente(matricula: string): Promise<any> {
    const url = `http://localhost:5000/api/v1/student/teacher?matricula=${matricula}`;
    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }
}
