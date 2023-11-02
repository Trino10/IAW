import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

//Aquí va todo lo que define a la entidad.

@Entity()
export class Autor {
    @PrimaryColumn()
    id: string

    @Column({
        type: 'text',
        unique: true,
        default: 'autor',
        nullable: true,
    })
    nombre: string;
}