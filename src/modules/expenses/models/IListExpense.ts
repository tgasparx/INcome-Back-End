import IExpense from "./IExpense"

export default interface IListExpense{
   expenses_summary: {
    page: number
    perPage: number
    total_records: number
    all_expenses: IExpense[]
   }
}