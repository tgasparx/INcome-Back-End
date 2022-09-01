import { Request, Response } from "express"
import IEditOrderUseCase from "../useCases/IEditOrderUseCase"



export default interface IEditOrderController{
    editOrderUseCase: IEditOrderUseCase
    handle: (request: Request, response: Response) => Promise<Response>
}