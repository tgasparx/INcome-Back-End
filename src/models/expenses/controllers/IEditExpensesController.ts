import { Request, Response } from "express"
import IEditExpenseUseCase from "../useCases/IEditExpenseUseCase"




export default interface IEditExpensesController{
    editExpensesUseCase: IEditExpenseUseCase
    handle: (request: Request, response: Response) => Promise<Response>
}