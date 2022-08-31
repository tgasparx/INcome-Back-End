import Database from "../../../database"
import IExpenseData from "../models/IExpenseData"
import IExpensesRepository from "./IExpensesRepository"


export default class ExpensesRepository implements IExpensesRepository{
    database: Database
    constructor(database: Database){
        this.database = database
    }

    async createExpense({description, value, status}: IExpenseData, token: string): Promise<boolean>{
        const created = await this.database.createExpense({status, value, description}, token)
        return created
    }
    async listExpenses(token: string){
        const list = await this.database.listExpenses(token)
        return list
         
    }
    async editExpense({description, value, status}: IExpenseData, expenseId: string, token: string){
        const edited = await this.database.editExpense({description, value, status}, expenseId, token)
        return edited
    }
    async deleteExpense(expenseId, token){
        const deleted = await this.database.deleteExpense(expenseId, token)
        return deleted
    }
}