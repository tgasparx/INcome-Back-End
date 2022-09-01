import IEditExpenseData from "../models/IEditExpenseData"
import IExpensesRepository from "../repositories/IExpensesRepository"
import IEditExpenseUseCase from "./IEditExpenseUseCase"

export default class EditExpensesUseCase implements IEditExpenseUseCase{
    expensesRepository: IExpensesRepository
    constructor(expensesRepository: IExpensesRepository){
        this.expensesRepository = expensesRepository
    }
    async execute({description, value, status}: IEditExpenseData, expenseId: string, token: string): Promise<boolean>{
        const edited = await this.expensesRepository.editExpense({description, value, status}, expenseId, token)
        return edited
    }
}