import { Request, Response } from "express"
import IDeleteOrderUseCase from "../useCases/IDeleteOrderUseCase"
import IDeleteOrderController from "./IDeleteOrderController"


export default class DeleteOrderController implements IDeleteOrderController {
    deleteOrderUseCase: IDeleteOrderUseCase
    constructor(deleteOrderUseCase: IDeleteOrderUseCase) {
        this.deleteOrderUseCase = deleteOrderUseCase
    }
    async handle(request: Request, response: Response): Promise<Response> {
        const { orderId } = request.body
        const { token } = request.params
        const deleted = await this.deleteOrderUseCase.execute(orderId, token)
        if(deleted){
            response.status(200)
            return response.send("Pedido deletado com sucesso")
        }else{
            response.status(400)
            return response.send("Pedido não encontradi")
        }
    }
}