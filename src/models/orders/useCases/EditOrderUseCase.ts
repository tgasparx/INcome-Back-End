import IEditOrderData from "../models/IEditOrderData"
import IOrdersRepository from "../repositories/IOrdersRepository"
import IEditOrderUseCase from "./IEditOrderUseCase"


export default class EditOrderUseCase implements IEditOrderUseCase{
    ordersRepository: IOrdersRepository
    constructor(ordersRepository: IOrdersRepository){
        this.ordersRepository = ordersRepository
    }
    async execute({description, value, status, driver, km}: IEditOrderData, orderId: string, token: string){
        const edited = await this.ordersRepository.editOrder({description, value, status, driver, km}, orderId, token)
        return edited
    }
}