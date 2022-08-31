

export default class DeleteExpenseUseCase{
    expensesRepository: any
    constructor(expensesRepository: any){
        this.expensesRepository = expensesRepository
    }
    async execute(expenseId, token){
        const deleted = await this.expensesRepository.deleteExpense(expenseId, token)
        return deleted
    }
}