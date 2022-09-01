import IOrderData from "../models/IOrderData"
import IOrdersRepository from "../repositories/IOrdersRepository"
import ICreateOrderUseCase from "./ICreateOrderUseCase"


export default class CreateOrderUseCase implements ICreateOrderUseCase{
    ordersRepository: IOrdersRepository
    constructor(ordersRepository: IOrdersRepository){
        this.ordersRepository = ordersRepository
    }
    async execute({status, value, description, client, km, driver}: IOrderData, token: string): Promise<boolean>{
        const created = await this.ordersRepository.createOrder({status, value, description, client, km, driver}, token)
        return created
    }
}