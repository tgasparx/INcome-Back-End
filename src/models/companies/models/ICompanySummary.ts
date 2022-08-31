import IExpense from "../../expenses/models/IExpense"
import IOrder from "../../orders/models/IOrder"

export default interface ICompanySummary{
    company_name: string
    orders_summary: {
      page: number
      perPage: number
      total_records: number
      all_orders: IOrder[]
    },
    expenses_summary: {
      page: number
      perPage: number
      total_records: number
      all_expenses: IExpense[]
    }
}