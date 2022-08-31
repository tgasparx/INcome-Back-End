export default class EditExpensesUseCase{
    expensesRepository
    constructor(expensesRepository){
        this.expensesRepository = expensesRepository
    }
    async execute({description, value, status}: any, expenseId: string, token: string){
        const edited = await this.expensesRepository.editExpense({description, value, status}, expenseId, token)
        return edited
    }
}