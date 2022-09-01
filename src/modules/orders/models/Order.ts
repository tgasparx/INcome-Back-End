import IOrder from "./IOrder"


export default class Order implements IOrder{
    order_id: string
    owner_company: string
    description: string
    status: string
    value: number
    km: number
    driver: string
    client: string
    created_at: Date
    updated_at: Date
}