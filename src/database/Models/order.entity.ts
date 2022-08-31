import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn} from "typeorm"

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

