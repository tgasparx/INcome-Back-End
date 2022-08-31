

export default class ListOrdersUseCase{
    ordersRepository
    constructor(ordersRepository){
        this.ordersRepository = ordersRepository
    }
    async execute(token:string){
        const orders = await this.ordersRepository.listOrders(token)
        return orders
    }
}