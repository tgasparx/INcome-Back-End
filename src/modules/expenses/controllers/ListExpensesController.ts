import { Request, Response } from "express"
import IListExpensesUsecase from "../useCases/IListExpensesUseCase"
import IListExpensesController from "./IListExpensesController"


export default class ListExpensesController implements IListExpensesController{
    listExpensesUseCase: IListExpensesUsecase
    constructor(listExpensesUseCase: IListExpensesUsecase){
        this.listExpensesUseCase = listExpensesUseCase
    }

    async handle(request: Request, response: Response): Promise<Response>{
        const {token} = request.params
        const list = await this.listExpensesUseCase.execute(token)
        return response.json(list)
    }
}