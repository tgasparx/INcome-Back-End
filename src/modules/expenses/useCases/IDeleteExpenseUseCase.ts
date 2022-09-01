import IExpensesRepository from "../repositories/IExpensesRepository";



export default interface IDeleteExpenseUseCase{
    expensesRepository: IExpensesRepository
    execute: (expenseId: string, token: string) => Promise<boolean>
}