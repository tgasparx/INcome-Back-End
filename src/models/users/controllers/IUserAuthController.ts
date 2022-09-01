import { Request, Response } from "express"
import IUserAuthUseCase from "../useCases/IUserAuthUseCase"



export default interface IUserAuthController{
    userAuthUseCase: IUserAuthUseCase
    handle: (request: Request, response: Response) => Promise<Response>
}