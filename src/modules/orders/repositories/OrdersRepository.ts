import Database from "../../../database"
import IEditOrderData from "../models/IEditOrderData"
import IOrderData from "../models/IOrderData"
import IOrdersRepository from "./IOrdersRepository"


export default class OrdersRepository implements IOrdersRepository{
    database: Database
    constructor(database: Database){
        this.database = database
    }


async createOrder({description, value, status, client, km, driver}: IOrderData, token: string){
 const created = await this.database.createOrder({status, value, description, client, km, driver}, token)
 return created
}
async editOrder({description, value, status, client, km, driver}: IEditOrderData, orderId: string, token: string){
    const edited = await this.database.editOrder({description, value, status, client, km, driver}, orderId, token)
    return edited
}
async listOrders(token:string){
    const orders = await this.database.listOrders(token)
    return orders
}
async deleteOrder(orderId: string, token: string){
    const deleted = await this.database.deleteOrder(orderId, token)
    return deleted
}
}