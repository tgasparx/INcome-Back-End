import IExpensesRepository from "../repositories/IExpensesRepository"


export default class DeleteExpenseUseCase{
    expensesRepository: IExpensesRepository
    constructor(expensesRepository: IExpensesRepository){
        this.expensesRepository = expensesRepository
    }
    async execute(expenseId: string, token: string): Promise<boolean>{
        const deleted = await this.expensesRepository.deleteExpense(expenseId, token)
        return deleted
    }
}