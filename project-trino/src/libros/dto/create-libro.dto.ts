//Todo lo que define al objeto que voy a insertar va aqui.

import { IsInt, IsPositive, IsString, MaxLength, MinLength } from "class-validator";
import { BeforeInsert } from "typeorm";

export class CreateLibroDto {
    //Estos decoradores son las condiciones que se deben de cumplir
    //Son decoradores/Funciones que ejecuta el Framework por debajo.
    @IsString()
    @MinLength(5)
    @MaxLength(10)
    isbn: string;

    @IsString()
    @MinLength(5)
    nombre: string;

    @IsInt()
    @IsPositive()
    precio: number;

}