

export default class DeleteOrderController{
    deleteOrderUseCase: any
    constructor(deleteOrderUseCase: any){
        this.deleteOrderUseCase = deleteOrderUseCase
    }
    async handle(request, response){
        const {orderId} = request.body
        const {token} = request.params
        const deleted = await this.deleteOrderUseCase.execute(orderId, token)
        return response.json(deleted)
    }
}