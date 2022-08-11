

export default class CreateExpenseUseCase{
    expensesRepository: any
    constructor(expensesRepository: any){
        this.expensesRepository = expensesRepository
    }

async execute({status, value}: any, token){
    const created = this.expensesRepository.createExpense({status, value}, token)
    return created
}
}