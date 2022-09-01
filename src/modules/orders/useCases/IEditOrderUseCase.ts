import IEditOrderData from "../models/IEditOrderData";
import IOrdersRepository from "../repositories/IOrdersRepository";



export default interface IEditOrderUseCase{
    ordersRepository: IOrdersRepository
    execute: ({description, value, status, driver, km}: IEditOrderData, orderId: string, token: string) => Promise<boolean>
}