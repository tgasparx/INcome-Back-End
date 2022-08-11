

export default class CreateExpenseUseCase{
    expensesRepository: any
    constructor(expensesRepository: any){
        this.expensesRepository = expensesRepository
    }

async execute({status, value, description}: any, token){
    const created = this.expensesRepository.createExpense({status, value, description}, token)
    return created
}
}