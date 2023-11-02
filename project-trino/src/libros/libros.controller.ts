import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { CreateLibroDto } from './dto/create-libro.dto';
import { PaginationDTO } from 'src/common/dtos/pagination.dto';

@Controller('libros')
export class LibrosController {

// inyectamos LibrosService para que se comuniquen Cont con Ser
constructor(private readonly librosService:LibrosService){

}

    // @Get('/')
    // gethome(){
    //     return this.librosService.gethome()
    // }

    // @Get('listar')
    // getall(){
    //     return this.librosService.getAll()
    // }

    // @Get(':id')
    // getAutorById(@Param('id') id: string){
    //     return this.librosService.getAutorById(id)
    // }

    // @Post()
    // new(){
    //     return ('Nuevo registro');
    // }

    @Put()
    update(){
        return ('Actualizar registro');
    }

    @Delete()
    delete(){
        return ('Borrar registro');
    }
    
    @Post()
    create(@Body() createLibroDto: CreateLibroDto){
        // el create del servicio de libros
        return this.librosService.create(createLibroDto)
    }

    @Get('listar')
    getAll(){
        return this.librosService.findAll();
    }

    @Get(':id')
    getISBN(@Param('id') isbn: string){
        return this.librosService.getISBN(isbn)
    }

    // END POINT
    @Get(':id/:nombre')
    getISBNNombre(@Param('id') isbn: string, @Param('nombre') usuario: string){
        return `El libro de ${usuario} tiene el isbn: ${isbn}`
    }

//    @Get(':id')
//    findOne(@Param('id',ParseIntPipe) id:string) {
//        return this.librosService.findOneBy(id);
//    }

    @Delete(':id')
    remove(@Param('id') isbn: string){
        return this.librosService.remove(isbn);
    }

    @Get()
    pagination ( @Query() paginationDTO: PaginationDTO ) {
        console.log(paginationDTO);
        return this.librosService.pagination(paginationDTO);
    }

}