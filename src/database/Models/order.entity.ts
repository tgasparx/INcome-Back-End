import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, PrimaryColumn, JoinColumn, OneToOne, Generated } from "typeorm"
import { Companies } from "./company.entity"

@Entity()
export class Order {
    @PrimaryColumn()
    order_id: string

    @Column()
    owner_company: string

    @Column()
    status: string

    @Column()
    value: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

}

