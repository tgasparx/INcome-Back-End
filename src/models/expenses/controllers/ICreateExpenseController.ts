import { Request, Response } from "express";
import ICreateExpenseUseCase from "../useCases/ICreateExpenseUseCase";


export default interface ICreateExpenseController{
    createExpenseUseCase: ICreateExpenseUseCase
    handle: (request: Request, response: Response) => Promise<Response>
}