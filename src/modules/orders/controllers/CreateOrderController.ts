import { Request, Response } from "express"
import ICreateOrderUseCase from "../useCases/ICreateOrderUseCase"
import ICreateOrderController from "./ICreateOrderController"


export default class CreateOrderController implements ICreateOrderController {
    createOrderUseCase: ICreateOrderUseCase
    constructor(createOrderUseCase: ICreateOrderUseCase) {
        this.createOrderUseCase = createOrderUseCase
    }
    async handle(request: Request, response: Response): Promise<Response> {
        const { status, value, description, client, km, driver } = request.body
        const { token } = request.params
        const created: boolean = await this.createOrderUseCase.execute({ status, value, description, client, km, driver }, token)
        if(created){
            response.status(201)
            return response.send("Pedido criado com sucesso")
        }else{
            response.status(406)
            return response.send("Ocorreu um erro")
        }
      
    }
}