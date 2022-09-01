import { Request, Response } from "express"
import IDeleteUserUseCase from "../useCases/IDeleteUserUseCase"


export default interface IDeleteUserController{
    deleteUserUseCase: IDeleteUserUseCase
    handle: (request: Request, response: Response) => Promise<Response>
}