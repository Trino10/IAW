import { IsIn, IsString, MaxLength, MinLength, isIn } from "class-validator";
import { isString } from "util";



export class CreateAutorDto {


    @IsString()
    @MinLength(5)
    @MaxLength(10)
    id: string;

    @IsString()
    @MinLength(5)
    nombre: string;
}