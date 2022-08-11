

export default class ExpensesRepository{
    database: any
    constructor(database: any){
        this.database = database
    }

    async createExpense({status, value}: any, token: string){
        const created = await this.database.createExpense({status, value}, token)
        return created
    }
    async listExpenses(token: string){
        
    }
}