import { Request, Response } from "express"
import IListAllUsersUseCase from "../useCases/IListAllUsersUseCase"
import IListAllUsersController from "./IListAllUsersController"

export default class ListAllUsersController implements IListAllUsersController{
    listAllUsersUseCase: IListAllUsersUseCase
    constructor(listAllUsersUseCase: IListAllUsersUseCase){
        this.listAllUsersUseCase = listAllUsersUseCase
    }
    async handle(request: Request, response: Response): Promise<Response>{
        const users = await this.listAllUsersUseCase.execute()
        return response.json(users)
    }
}