import IOrdersRepository from "../repositories/IOrdersRepository"
import IDeleteOrderUseCase from "./IDeleteOrderUseCase"


export default class DeleteOrderUseCase implements IDeleteOrderUseCase{
    ordersRepository: IOrdersRepository
    constructor(ordersRepository: IOrdersRepository){
        this.ordersRepository = ordersRepository
    }
    async execute(orderId: string, token: string): Promise<boolean>{
        const deleted = await this.ordersRepository.deleteOrder(orderId, token)
        return deleted
    }
}