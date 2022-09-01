import IExpenseData from "../models/IExpenseData";
import IExpensesRepository from "../repositories/IExpensesRepository";



export default interface ICreateExpenseUseCase{
    expensesRepository: IExpensesRepository
    execute: ({}: IExpenseData, token: string) => Promise<boolean>
}