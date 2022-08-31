import OrdersRepository from "../repositories/OrdersRepository";


export default class ListOrdersController{
    listOrdersUseCase
    constructor(listOrdersUseCase: any){
        this.listOrdersUseCase = listOrdersUseCase
    }
    async handle(request, response){
        const {token} = request.params
        const list = await this.listOrdersUseCase.execute(token)
        return response.json(list)
    }
}