import IOrderData from "../models/IOrderData";
import IOrdersRepository from "../repositories/IOrdersRepository";



export default interface ICreateOrderUseCase{
    ordersRepository: IOrdersRepository
    execute: ({}: IOrderData, token: string) => Promise<boolean>
}