import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn} from "typeorm"

@Entity()
export class Expense {
    @PrimaryColumn()
    expense_id: string

    @Column()
    owner_company: string

    @Column()
    description: string

    @Column()
    status: string

    @Column()
    value: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date


}

