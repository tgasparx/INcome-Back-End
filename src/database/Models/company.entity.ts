import { Entity, Column, PrimaryColumn, UpdateDateColumn, CreateDateColumn, OneToOne, OneToMany } from "typeorm"
import { CompanyAuth } from "./companyAuth.entity"
import { Users } from "./user.entity"

@Entity()
export class Companies {
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column({
        unique: true
    })
    email: string

    @Column()
    password: string

    @Column()
    cnpj: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @OneToOne(type => CompanyAuth, company => Companies)
    // @JoinColumn()
    auth: CompanyAuth

    @OneToMany(() => Users, (user) => company => Companies)
    users: Users[]

}
