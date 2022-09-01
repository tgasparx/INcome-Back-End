import { Request, Response } from "express"
import IUserEditUseCase from "../useCases/IUserEditUseCase"



export default interface IUserEditController{
    userEditUseCase: IUserEditUseCase
    handle: (request: Request, response: Response) => Promise<Response>
}