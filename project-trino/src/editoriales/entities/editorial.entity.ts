import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";




@Entity()
export class Editorial {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text',{
        unique:true,
        default:'editoriales',
        nullable:false
    })
    nombre:string
}