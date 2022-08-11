

export default class CreateOrderController{
    createOrderUseCase: any
    constructor(createOrderUseCase: any){
this.createOrderUseCase = createOrderUseCase
    }
    async handle(request, response){
        const {status, value, description, client, km, driver} = request.body
        const {token} = request.params
        const created = await this.createOrderUseCase.execute({status, value, description, client, km, driver}, token)
        return response.json(created)
    }
}