import IListOrder from "../models/IListOrder"
import IOrdersRepository from "../repositories/IOrdersRepository"



export default interface IListOrdersUseCase{
    ordersRepository: IOrdersRepository
    execute: (token:string) => Promise<IListOrder | boolean>
}