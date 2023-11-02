import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    // --> Inyección de dependencias
    // --> Inyectando la clase AppService en la propiedad appServicede la clase AppController
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('listado') // --> El endpoint /listado
  getAll(){
    return this.appService.getAll()
  }
}
