import Database from "../../../database";
import IExpenseData from "../models/IExpenseData";
import IListExpense from "../models/IListExpense";


export default interface IExpensesRepository{
    database: Database
    createExpense: ({}:IExpenseData, token: string) => Promise<boolean>
    listExpenses: (token: string) => Promise<IListExpense>
    deleteExpense: (expenseId: string, token: string) => Promise<boolean>
    editExpense: ({description, value, status}: IExpenseData, expenseId: string, token: string) => Promise<boolean>
}