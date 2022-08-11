

export default class CreateOrderUseCase{
    ordersRepository: any
    constructor(ordersRepository){
        this.ordersRepository = ordersRepository
    }
    async execute({status, value, description, client, km, driver}: any, token: string){
        const created = await this.ordersRepository.createOrder({status, value, description, client, km, driver}, token)
        return created
    }
}