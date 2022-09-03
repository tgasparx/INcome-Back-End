import { Request, Response } from "express"
import IEditExpenseUseCase from "../useCases/IEditExpenseUseCase"
import IEditExpensesController from "./IEditExpensesController"


export default class EditExpensesController implements IEditExpensesController{
    editExpensesUseCase: IEditExpenseUseCase
    constructor(editExpensesUseCase: IEditExpenseUseCase){
        this.editExpensesUseCase = editExpensesUseCase
    }
    async handle(request: Request, response: Response): Promise<Response>{
        const {description, value, status} = request.body
        const {expenseId, token} = request.params
        const edited = await this.editExpensesUseCase.execute({description, value, status}, expenseId, token)
        // return response.json({description, value, status, expenseId, token})
        if(edited){
            response.status(202)
            return response.send("Despesa editada com sucesso")
        }else{
            response.status(406)
            return response.send("Houve um erro interno")
        }
    }
}