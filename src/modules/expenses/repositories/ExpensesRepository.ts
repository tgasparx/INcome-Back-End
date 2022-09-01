import IDatabase from "../../../database/IDatabase"
import IExpenseData from "../models/IExpenseData"
import IListExpense from "../models/IListExpense"
import IExpensesRepository from "./IExpensesRepository"


export default class ExpensesRepository implements IExpensesRepository{
    database: IDatabase
    constructor(database: IDatabase){
        this.database = database
    }

    async createExpense({description, value, status}: IExpenseData, token: string): Promise<boolean>{
        const created = await this.database.createExpense({status, value, description}, token)
        return created
    }
    async listExpenses(token: string): Promise<IListExpense | false>{
        const list = await this.database.listExpenses(token)
        return list
         
    }
    async editExpense({description, value, status}: IExpenseData, expenseId: string, token: string): Promise<boolean>{
        const edited = await this.database.editExpense({description, value, status}, expenseId, token)
        return edited
    }
    async deleteExpense(expenseId: string, token: string): Promise<boolean>{
        const deleted = await this.database.deleteExpense(expenseId, token)
        return deleted
    }
}