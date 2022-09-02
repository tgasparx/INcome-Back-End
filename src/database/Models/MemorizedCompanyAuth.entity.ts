import { Entity, Column, PrimaryGeneratedColumn,  UpdateDateColumn } from "typeorm"

@Entity()
export class MemorizedUserAuth {
    @PrimaryGeneratedColumn()
    auth_id: string

    @Column()
    company_name: string


    @Column()
    company: string

    @UpdateDateColumn()
    last_login: Date

    @Column()
    type: string

    @Column()
    token: string

}