import Database from "../../../database";
import IExpenseData from "../models/IExpenseData";


export default interface IExpensesRepository{
    database: Database
    createExpense: ({}:IExpenseData, token: string) => Promise<boolean>
}