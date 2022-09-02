import { Request, Response } from "express"
import IEditOrderUseCase from "../useCases/IEditOrderUseCase"
import IEditOrderController from "./IEditOrderController"


export default class EditOrderController implements IEditOrderController {
    editOrderUseCase: IEditOrderUseCase
    constructor(editOrderUseCase: IEditOrderUseCase) {
        this.editOrderUseCase = editOrderUseCase
    }
    async handle(request: Request, response: Response): Promise<Response> {
        const { description, value, status, client, driver, km, orderId } = request.body
        const { token } = request.params
        const edited = await this.editOrderUseCase.execute({ description, value, status, client, driver, km }, orderId, token)
       if(edited){
        response.status(202)
        return response.send("Companhia editada com sucesso")
       }else{
        response.status(406)
        response.send("Pedido não encontrado ou companhia não existente")
       }
        
    }
}