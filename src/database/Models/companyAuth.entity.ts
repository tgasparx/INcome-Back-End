import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, PrimaryColumn, JoinColumn, OneToOne, Generated } from "typeorm"
import { Companies } from "./company.entity"

@Entity()
export class CompanyAuth {
    @PrimaryGeneratedColumn('uuid')
    auth_id: string

    @Column()
    company_name: string

    // @PrimaryColumn()
    // @OneToOne((type) => Companies, auth => CompanyAuth)
    // company: Company
    // @JoinColumn()
    @Column()
    company: string

    @UpdateDateColumn()
    last_login: Date

    @Column()
    token: string

    @Column()
    type: string

}

// export class CompanyAuth {
//     @PrimaryGeneratedColumn()
//     auth_id: string

//     @Column()
//     company_name: string

//     // @OneToOne((type) => Companies)
//     // @JoinColumn()
//     @Column()
//     company: string //Companies

//     @UpdateDateColumn()
//     last_login: Date

//     @Column()
//     token: string

//     @Column()
//     type: string

// }