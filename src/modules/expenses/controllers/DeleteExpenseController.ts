import { Request, Response } from "express"
import IDeleteExpenseUseCase from "../useCases/IDeleteExpenseUseCase"
import IDeleteExpenseController from "./IDeleteExpenseController"

export default class DeleteExpenseController implements IDeleteExpenseController{
    deleteExpenseUseCase: IDeleteExpenseUseCase
    constructor(deleteExpenseUseCase: IDeleteExpenseUseCase){
        this.deleteExpenseUseCase = deleteExpenseUseCase
    }
    async handle(request: Request, response: Response): Promise<Response>{
        const {expenseId, token} = request.params
        const deleted = await this.deleteExpenseUseCase.execute(expenseId, token)
        if(deleted){
            response.status(200)
            return response.send("Despesa deletada com sucesso")
        }else{
            response.status(406)
            return response.send("Despesa não encontrada ou a companhia não existente")
        }
    }
}