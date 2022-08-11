import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm"
import { Companies } from "./company.entity"
import { Users } from "./user.entity"

@Entity()
export class UserAuth {
    @PrimaryGeneratedColumn()
    auth_id: string

    @Column()
    user_name: string

    // @OneToOne((type) => Users, auth => UserAuth)
    // @JoinColumn()
    // user: Users

    @Column()
    // @JoinColumn()
    user: string

    @UpdateDateColumn()
    last_login: Date

    @Column()
    type: string

    @Column()
    token: string

}