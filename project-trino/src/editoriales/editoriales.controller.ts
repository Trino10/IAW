import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('editoriales')
export class EditorialesController {

    @Get('/')
    getHome(){
        return('sección de Editoriales')
    }

    @Get('listar')
    getAll(){
        return('Listado de Editoriales')
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
}
