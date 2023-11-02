import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { AutoresService } from './autores.service';
import { PaginationDTO } from 'src/common/dtos/pagination.dto';
import { CreateAutorDto } from './dto/create-autor.dto';

@Controller('autores')
export class AutoresController {

    // inyección de dependencias
    constructor(private autoresService: AutoresService){
        
    }
    //Home
    @Get('/')
    getHome(){
        return('sección de autores')
    }

    //Listar todos o filtrar
    //https://.../autores/listar
    @Get('listar')
    getAll(){
        return this.autoresService.getAll();
    }


    //Detalle, un solo objeto.
    //https://.../autores/4
    @Get(':id')
    getAutorById(@Param('id') id: string){
        return this.autoresService.getAutorById(id);
    }

    @Post()
    new(){
        return('Nuevo registro')
    }

    @Put()
    update(){
        return('Actualizar registro')
    }

    @Delete()
    borrar(){
        return('Borrar registro')
    }

    @Get()
    pagination ( @Query() paginationDTO: PaginationDTO ) {
        console.log(paginationDTO);
        return this.autoresService.pagination(paginationDTO);
    }

    @Post()
    create(@Body() createAutorDto: CreateAutorDto){
        // el create del servicio de libros
        return this.autoresService.create(createAutorDto)
    }
}
