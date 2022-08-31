import { Entity, Column, CreateDateColumn, UpdateDateColumn,  OneToOne,  PrimaryColumn } from "typeorm"
import { UserAuth } from "./UserAuth.entity"

@Entity()
export class Users {
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column({
        unique: true
    })
    email: string

    @Column({
        unique: true
    })
    cpf: string

    @Column()
    password: string

    @CreateDateColumn()
    created_at: string

    @UpdateDateColumn()
    updated_at: string

    @OneToOne((type) => UserAuth, user => Users)
    auth: UserAuth
    
    @Column()
    company: string


}