import OrdersRepository from "../repositories/OrdersRepository";


export default class ListOrdersController{
    listOrdersUseCase
    constructor(listOrdersUseCase: any){
        this.listOrdersUseCase = listOrdersUseCase
    }
    async handle(request, response){
        return response.json({ok: "ok"})
    }
}