import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // -- Prefijo de acceso a la api en url <---
  app.setGlobalPrefix('api');
  // --> Configuración mecanismo de validación <---

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true
    })
  )
  // --> Puerto de escucha del servidor <--
  await app.listen(3000);
}
bootstrap();
