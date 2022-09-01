import { Request, Response } from "express";
import IListOrderUseCase from "../useCases/IListOrderUseCase";



export default interface IListOrdersController{
    listOrdersUseCase: IListOrderUseCase
    handle: (request: Request, response: Response) => Promise<Response>

}