import IListExpense from "../models/IListExpense"
import IExpensesRepository from "../repositories/IExpensesRepository"
import IListExpensesUsecase from "./IListExpensesUseCase"

export default class ListExpensesUseCase implements IListExpensesUsecase{
    expensesRepository: IExpensesRepository
    constructor(expensesRepository: IExpensesRepository){
        this.expensesRepository = expensesRepository
    }
    async execute(token: string): Promise<IListExpense>{
        const list = await this.expensesRepository.listExpenses(token)
        return list
    }
}