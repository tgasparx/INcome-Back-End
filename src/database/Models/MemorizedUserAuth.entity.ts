import { Entity, Column, PrimaryGeneratedColumn,  UpdateDateColumn } from "typeorm"

@Entity()
export class MemorizedUserAuth {
    @PrimaryGeneratedColumn()
    auth_id: string

    @Column()
    user_name: string


    @Column()
    user: string

    @UpdateDateColumn()
    last_login: Date

    @Column()
    type: string

    @Column()
    token: string

}