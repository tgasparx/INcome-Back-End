import { Request, Response } from "express"
import IEditExpenseUseCase from "../useCases/IEditExpenseUseCase"
import IEditExpensesController from "./IEditExpensesController"


export default class EditExpensesController implements IEditExpensesController{
    editExpensesUseCase: IEditExpenseUseCase
    constructor(editExpensesUseCase: IEditExpenseUseCase){
        this.editExpensesUseCase = editExpensesUseCase
    }
    async handle(request: Request, response: Response): Promise<Response>{
        const {description, value, status, expenseId} = request.body
        const {token} = request.params
        const edited = await this.editExpensesUseCase.execute({description, value, status}, expenseId, token)
        return response.json(edited)
    }
}