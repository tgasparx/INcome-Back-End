import { Request, Response } from "express"
import IListExpensesUsecase from "../useCases/IListExpensesUseCase"



export default interface IListExpensesController{
    listExpensesUseCase: IListExpensesUsecase
    handle: (request: Request, response: Response) => Promise<Response>
}