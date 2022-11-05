import { Injectable } from '@nestjs/common';

// Define as funções utilizadas na API e com o DB para a rota '/'
@Injectable()
export class AppService {
  getHello(): string {
    return 'Livraria API';
  }
}
