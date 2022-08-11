

export default class CreateOrderUseCase{
    ordersRepository: any
    constructor(ordersRepository){
        this.ordersRepository = ordersRepository
    }
    async execute({status, value}: any, token: string){
        const created = await this.ordersRepository.createOrder({status, value}, token)
        return created
    }
}