import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Define o comportamento da API para a rota '/'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
