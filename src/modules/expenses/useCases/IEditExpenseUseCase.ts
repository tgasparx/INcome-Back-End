import IEditExpenseData from "../models/IEditExpenseData";
import IExpensesRepository from "../repositories/IExpensesRepository";


export default interface IEditExpenseUseCase{
    expensesRepository: IExpensesRepository
    execute: ({description, value, status}: IEditExpenseData, expenseId: string, token: string) => Promise<boolean>
}