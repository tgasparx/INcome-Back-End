import { Request, Response } from "express"
import IListAllUsersUseCase from "../useCases/IListAllUsersUseCase"



export default interface IListAllUsersController{
    listAllUsersUseCase: IListAllUsersUseCase
    handle: (request: Request, response: Response) => Promise<Response>
}