import IListOrder from "../models/IListOrder"
import IOrdersRepository from "../repositories/IOrdersRepository"
import IListOrdersUseCase from "./IListOrderUseCase"


export default class ListOrdersUseCase implements IListOrdersUseCase{
    ordersRepository: IOrdersRepository
    constructor(ordersRepository: IOrdersRepository){
        this.ordersRepository = ordersRepository
    }
    async execute(token:string): Promise<IListOrder | boolean>{
        const orders = await this.ordersRepository.listOrders(token)
        return orders
    }
}