import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, UpdateDateColumn, CreateDateColumn, OneToOne, OneToMany, JoinColumn } from "typeorm"
import { CompanyAuth } from "./companyAuth.entity"
import { Users } from "./user.entity"

@Entity()
export class Companies {
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
// export class Companies {
//     @PrimaryGeneratedColumn('uuid')
//     company_id: string

//     @Column()
//     company_name: string

//     @Column({
//         unique: true
//     })
//     company_email: string

//     @Column()
//     company_password: string

//     @Column()
//     company_cnpj: string

//     @CreateDateColumn()
//     created_at: Date

//     @UpdateDateColumn()
//     updated_at: Date

//     @OneToOne((type) => CompanyAuth)
//     auth: CompanyAuth

//     @OneToMany(() => Users, (user) => user.company)
//     users: Users

// }