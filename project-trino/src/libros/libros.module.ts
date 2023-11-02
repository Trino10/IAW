import { Module } from '@nestjs/common';
import { LibrosController } from './libros.controller';
import { LibrosService } from './libros.service';
import { Libro } from './entities/libro.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [LibrosController],
  providers: [LibrosService],
  imports: [
    TypeOrmModule.forFeature([Libro])
  ]
})
export class LibrosModule {}
