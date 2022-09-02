import { Request, Response } from "express"
import IUser from "../models/IUser"
import IListAllUsersUseCase from "../useCases/IListAllUsersUseCase"
import IListAllUsersController from "./IListAllUsersController"

export default class ListAllUsersController implements IListAllUsersController{
    listAllUsersUseCase: IListAllUsersUseCase
    constructor(listAllUsersUseCase: IListAllUsersUseCase){
        this.listAllUsersUseCase = listAllUsersUseCase
    }
    async handle(request: Request, response: Response): Promise<Response>{
        const users = await this.listAllUsersUseCase.execute()
        if(users){
            response.status(200)
            return response.json(users)
        }else{
            response.status(400)
            return response.send("Não foram encontrados motoristas")
        }
    }
}