import { Entity, Column, PrimaryGeneratedColumn,  UpdateDateColumn } from "typeorm"

@Entity()
export class CompanyAuth {
    @PrimaryGeneratedColumn('uuid')
    auth_id: string

    @Column()
    company_name: string

    @Column()
    company: string

    @UpdateDateColumn()
    last_login: Date

    @Column()
    token: string

    @Column()
    type: string

}
