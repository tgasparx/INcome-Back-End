import IListExpense from "../models/IListExpense";
import IExpensesRepository from "../repositories/IExpensesRepository";



export default interface IListExpensesUsecase{
    expensesRepository: IExpensesRepository
    execute: (token: string) => Promise<IListExpense | false>
}