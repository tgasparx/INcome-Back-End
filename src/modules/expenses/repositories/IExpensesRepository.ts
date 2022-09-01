import IDatabase from "../../../database/IDatabase";
import IExpenseData from "../models/IExpenseData";
import IListExpense from "../models/IListExpense";


export default interface IExpensesRepository{
    database: IDatabase
    createExpense: ({}:IExpenseData, token: string) => Promise<boolean>
    listExpenses: (token: string) => Promise<IListExpense | false>
    deleteExpense: (expenseId: string, token: string) => Promise<boolean>
    editExpense: ({description, value, status}: IExpenseData, expenseId: string, token: string) => Promise<boolean>
}