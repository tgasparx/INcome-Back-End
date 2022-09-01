import { Request, Response } from "express"
import IUserDataUseCase from "../useCases/IUserDataUseCase"



export default interface IUserDataController{
    userDataUseCase: IUserDataUseCase
    handle: (request: Request, response: Response) => Promise<Response>
}