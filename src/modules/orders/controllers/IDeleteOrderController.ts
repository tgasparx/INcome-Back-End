import { Request, Response } from "express";
import IDeleteOrderUseCase from "../useCases/IDeleteOrderUseCase";



export default interface IDeleteOrderController{
    deleteOrderUseCase: IDeleteOrderUseCase
    handle: (request: Request, response: Response) => Promise<Response>
}