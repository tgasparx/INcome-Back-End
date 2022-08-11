

export default class ExpensesRepository{
    database: any
    constructor(database: any){
        this.database = database
    }

    async createExpense({status, value, description}: any, token: string){
        const created = await this.database.createExpense({status, value, description}, token)
        return created
    }
    async listExpenses(token: string){
        
    }
}