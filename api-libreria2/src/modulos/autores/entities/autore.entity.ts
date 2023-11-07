import { Column, PrimaryGeneratedColumn } from "typeorm";






export class Autore {

    @PrimaryGeneratedColumn('increment')
    id: Number;

    @Column('text', {unique:true})
    nombre: String;
}
