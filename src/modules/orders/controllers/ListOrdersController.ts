import { Request, Response } from "express";
import OrdersRepository from "../repositories/OrdersRepository";
import IListOrdersUseCase from "../useCases/IListOrderUseCase";
import IListOrdersController from "./IListOrderController";


export default class ListOrdersController implements IListOrdersController{
    listOrdersUseCase: IListOrdersUseCase
    constructor(listOrdersUseCase: IListOrdersUseCase) {
        this.listOrdersUseCase = listOrdersUseCase
    }
    async handle(request: Request, response: Response): Promise<Response> {
        const { token } = request.params
        const list = await this.listOrdersUseCase.execute(token)
        return response.json(list)
    }
}