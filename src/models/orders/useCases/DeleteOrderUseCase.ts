

export default class DeleteOrderUseCase{
    ordersRepository: any
    constructor(ordersRepository: any){
        this.ordersRepository = ordersRepository
    }
    async execute(orderId: string, token: string){
        const deleted = await this.ordersRepository.deleteOrder(orderId, token)
        return deleted
    }
}