import { Request, Response } from "express"
import IDeleteExpenseUseCase from "../useCases/IDeleteExpenseUseCase"
import IDeleteExpenseController from "./IDeleteExpenseController"

export default class DeleteExpenseController implements IDeleteExpenseController{
    deleteExpenseUseCase: IDeleteExpenseUseCase
    constructor(deleteExpenseUseCase: IDeleteExpenseUseCase){
        this.deleteExpenseUseCase = deleteExpenseUseCase
    }
    async handle(request: Request, response: Response): Promise<Response>{
        const {expenseId} = request.body
        const {token} = request.params
        const deleted = await this.deleteExpenseUseCase.execute(expenseId, token)
        return response.json(deleted)
    }
}