

export default class CreateOrderController{
    createOrderUseCase: any
    constructor(createOrderUseCase: any){
this.createOrderUseCase = createOrderUseCase
    }
    async handle(request, response){
        const {status, value} = request.body
        const {token} = request.params
        const created = await this.createOrderUseCase.execute({status, value}, token)
        return response.json(created)
    }
}