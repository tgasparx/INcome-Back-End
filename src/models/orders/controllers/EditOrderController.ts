import { Request, Response } from "express"
import IEditOrderUseCase from "../useCases/IEditOrderUseCase"
import IEditOrderController from "./IEditOrderController"


export default class EditOrderController implements IEditOrderController {
    editOrderUseCase: IEditOrderUseCase
    constructor(editOrderUseCase: IEditOrderUseCase) {
        this.editOrderUseCase = editOrderUseCase
    }
    async handle(request: Request, response: Response): Promise<Response> {
        const { description, value, status, driver, km, orderId } = request.body
        const { token } = request.params
        console.log(description, value, status, driver, km, orderId, token)
        console.log("bateu")
        const edited = await this.editOrderUseCase.execute({ description, value, status, driver, km }, orderId, token)
        return response.json(edited)
    }
}