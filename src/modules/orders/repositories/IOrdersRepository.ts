import IDatabase from "../../../database/IDatabase";
import IEditOrderData from "../models/IEditOrderData";
import IListOrder from "../models/IListOrder";
import IOrderData from "../models/IOrderData";


export default interface IOrdersRepository{
    database: IDatabase
    createOrder: ({ status, value, description, client, km, driver }: IOrderData, token: string) => Promise<boolean>
    editOrder: ({description, value, status, client, km, driver}: IEditOrderData, orderId: string, token: string) => Promise<boolean>
    listOrders: (token: string) => Promise<IListOrder | false>
    deleteOrder: (orderId: string, token: string) => Promise<boolean>
}