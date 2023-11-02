import { BeforeInsert, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Libro{
    // @PrimaryGeneratedColumn('increment')
    // id: number;

    @PrimaryColumn()
    isbn: string

    @Column({
        type: 'text',
        unique: true,
        default: 'autor',
        nullable: true,
    })
    nombre: string;

    @Column({
        type: 'numeric',
        nullable: false,
        default: 0,
    })
    precio: number;

    @BeforeInsert()
    updateNombre(){
        this.nombre = this.nombre
                        .toUpperCase()
                        .replaceAll(" ","_")
    }
}