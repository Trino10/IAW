import { Module } from '@nestjs/common';
import { AutoresController } from './autores.controller';
import { AutoresService } from './autores.service';
import { Autor } from './entitties/autor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AutoresController],
  providers: [AutoresService],
  imports: [
    TypeOrmModule.forFeature([Autor])
  ]
})
export class AutoresModule {}
