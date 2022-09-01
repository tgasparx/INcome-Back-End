import IOrdersRepository from "../repositories/IOrdersRepository"


export default class DeleteOrderUseCase{
    ordersRepository: IOrdersRepository
    constructor(ordersRepository: IOrdersRepository){
        this.ordersRepository = ordersRepository
    }
    async execute(orderId: string, token: string): Promise<boolean>{
        const deleted = await this.ordersRepository.deleteOrder(orderId, token)
        return deleted
    }
}