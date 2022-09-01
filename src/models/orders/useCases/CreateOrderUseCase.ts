import IOrdersRepository from "../repositories/IOrdersRepository"


export default class CreateOrderUseCase{
    ordersRepository: IOrdersRepository
    constructor(ordersRepository: IOrdersRepository){
        this.ordersRepository = ordersRepository
    }
    async execute({status, value, description, client, km, driver}: any, token: string){
        const created = await this.ordersRepository.createOrder({status, value, description, client, km, driver}, token)
        return created
    }
}