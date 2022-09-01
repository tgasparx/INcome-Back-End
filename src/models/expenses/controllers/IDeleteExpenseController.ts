import { Request, Response } from "express";
import IDeleteExpenseUseCase from "../useCases/IDeleteExpenseUseCase";



export default interface IDeleteExpenseController{
    deleteExpenseUseCase: IDeleteExpenseUseCase
    handle: (request: Request, response: Response) => Promise<Response>
}