import IOrder from "./IOrder"

export default interface IListOrder{
    orders_summary: {
        page: number
        perPage: number
        total_records: number
        all_orders: IOrder[]
      }
}