import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Libro } from './entities/libro.entity';
import { Repository } from 'typeorm';
import { PaginationDTO } from 'src/common/dtos/pagination.dto';

@Injectable()
export class LibrosService {

    constructor(
        @InjectRepository(Libro)
        private readonly libroRepository: Repository<Libro>
    ){}



    //LISTAR TODOS LOS LIBROS////////////////////////////////

    async findAll(){
        let libros = await this.libroRepository.find();
        return {
            data: libros,
            msg: 'Listado de libros',
            status: 200
        }
    }


    //CREAR/////////////////////////////////////////////////

    async create (createLibroDto: CreateLibroDto){
        try {
            const libro = this.libroRepository.create(createLibroDto);
            await this.libroRepository.save(libro);
            return {
                data: createLibroDto,
                msg: 'Libro creado correctamente desde el servicio',
                status: 200
            };
        } catch(error) {
            console.log(error);
            throw new InternalServerErrorException("Hubo un error al crear el libro");
        }
    }

    //DETALLE/////////////////////////////////////////////////

    async getISBN(isbn: string){
        //Peticion al ORM
        const libro = await this.libroRepository.findOneBy({isbn})   //libroRepository es el ORM de Libros
        //ORM se conecta con el SGBD
        if(!libro){
            throw new NotFoundException(`Libro con isbn ${isbn} no encontrado`)
        }
        //return `El libro a buscar tiene este ${isbn} desde el servicio`
        return {
            data: libro,
            msg: `Detalle del libro ${isbn}`,
            status: 200
        }
    }

    //BORRAR UN LIBRO//////////////////////////////////////

    async remove (isbn: string){
        const libro = await this.libroRepository.findOneBy({isbn});
        if (! libro){
            throw new NotFoundException (`El libro con el isbn: ${isbn} no existe`)
        }else return('Libro eliminado')
        await this.libroRepository.remove(libro)
    }
        

    //PAGINACION///////////////////////////////////

    pagination ( paginationDTO: PaginationDTO ){
        const { limit , offset } = paginationDTO;
        //Busca desde el offset y extrae limit objectos
        return this.libroRepository.find({
            take: limit,
            skip: offset
        });
    }
}