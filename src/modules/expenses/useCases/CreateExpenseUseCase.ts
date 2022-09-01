import IExpenseData from "../models/IExpenseData"
import IExpensesRepository from "../repositories/IExpensesRepository"


export default class CreateExpenseUseCase{
    expensesRepository: IExpensesRepository
    constructor(expensesRepository: IExpensesRepository){
        this.expensesRepository = expensesRepository
    }

async execute({status, value, description}: IExpenseData, token: string){
    const created = this.expensesRepository.createExpense({status, value, description}, token)
    return created
}
}