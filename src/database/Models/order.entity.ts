import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, PrimaryColumn, JoinColumn, OneToOne, Generated } from "typeorm"
import { Companies } from "./company.entity"

@Entity()
export class Order {
    @PrimaryColumn()
    order_id: string

    @Column()
    owner_company: string

    @Column()
    description: string

    @Column()
    status: string

    @Column()
    value: number

    @Column({nullable: true})
    km: number
    
    @Column({nullable: true})
    driver: string

    @Column({nullable: true})
    client: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

}

