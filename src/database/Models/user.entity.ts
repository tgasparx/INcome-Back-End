import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn, PrimaryColumn } from "typeorm"
import { Companies } from "./company.entity"
import { CompanyAuth } from "./companyAuth.entity"
import { UserAuth } from "./UserAuth.entity"

@Entity()
export class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column({
        unique: true
    })
    email: string

    @Column()
    password: string

    @CreateDateColumn()
    created_at: string

    @UpdateDateColumn()
    updated_at: string

    @OneToOne((type) => UserAuth, user => Users)
    auth: UserAuth

    @ManyToOne((type) => Companies, users => Users)
    @JoinColumn()
    company: Companies


}