import { Request, Response } from "express"
import IUserSummaryUseCase from "../useCases/IUserSummaryUserCase"



export default interface IUserSummaryController{
    userSummaryUseCase: IUserSummaryUseCase
    handle: (request: Request, response: Response) => Promise<Response>
}