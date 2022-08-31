import IExpense from "./IExpense"


export default class Expense implements IExpense{
    expense_id: string
    owner_company: string
    description: string
    status: string
    value: string
    created_at: Date
    updated_at: Date
}