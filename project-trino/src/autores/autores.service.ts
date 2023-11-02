import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PaginationDTO } from 'src/common/dtos/pagination.dto';
import { CreateAutorDto } from './dto/create-autor.dto';

@Injectable()
export class AutoresService {
    autoresRepository: any;

    getAll(){
        // se comunica con el SGBD a través de typeORM
        //pasar los datos a TypeORM
        //TypeORM <-> SGBD
        return('Listado de Autores desde el servicio')
    }

    getAutorById(id: string){
        return(`detalle del autor ${id}`)
    }

    pagination ( paginationDTO: PaginationDTO ){
        const { limit , offset } = paginationDTO;
        //Busca desde el offset y extrae limit objectos
        return this.autoresRepository.find({
            take: limit,
            skip: offset
        });
    }

    async create (createAutorDto: CreateAutorDto){
        try {
            const libro = this.autoresRepository.create(createAutorDto);
            await this.autoresRepository.save(libro);
            return {
                data: createAutorDto,
                msg: 'Libro creado correctamente desde el servicio',
                status: 200
            };
        } catch(error) {
            console.log(error);
            throw new InternalServerErrorException("Hubo un error al crear el libro");
        }
    }

}
