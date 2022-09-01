import IDatabase from "../../../database/IDatabase"
import IEditOrderData from "../models/IEditOrderData"
import IListOrder from "../models/IListOrder"
import IOrderData from "../models/IOrderData"
import IOrdersRepository from "./IOrdersRepository"


export default class OrdersRepository implements IOrdersRepository{
    database: IDatabase
    constructor(database: IDatabase){
        this.database = database
    }


async createOrder({description, value, status, client, km, driver}: IOrderData, token: string): Promise<boolean>{
 const created = await this.database.createOrder({status, value, description, client, km, driver}, token)
 return created
}
async editOrder({description, value, status, client, km, driver}: IEditOrderData, orderId: string, token: string): Promise<boolean>{
    const edited = await this.database.editOrder({description, value, status, client, km, driver}, orderId, token)
    return edited
}
async listOrders(token:string): Promise<IListOrder | false>{
    const orders = await this.database.listOrders(token)
    return orders
}
async deleteOrder(orderId: string, token: string): Promise<boolean>{
    const deleted = await this.database.deleteOrder(orderId, token)
    return deleted
}
}