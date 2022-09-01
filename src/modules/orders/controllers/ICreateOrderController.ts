import { Request, Response } from "express";
import ICreateOrderUseCase from "../useCases/ICreateOrderUseCase";



export default interface ICreateOrderController{
    createOrderUseCase: ICreateOrderUseCase
    handle: (request: Request, response: Response) => Promise<Response>

}