

export default class EditOrderUseCase{
    ordersRepository
    constructor(ordersRepository: any){
        this.ordersRepository = ordersRepository
    }
    async execute({description, value, status, driver, km}: any, orderId: string, token: string){
        const edited = await this.ordersRepository.editOrder({description, value, status, driver, km}, orderId, token)
        return edited
    }
}