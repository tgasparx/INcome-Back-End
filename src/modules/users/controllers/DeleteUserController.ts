import { Request, Response } from "express"
import IDeleteUserUseCase from "../useCases/IDeleteUserUseCase"
import IDeleteUserController from "./IDeleteUserController"

export default class DeleteUserController implements IDeleteUserController{
    deleteUserUseCase: IDeleteUserUseCase
    constructor(deleteUserUseCase: IDeleteUserUseCase){
        this.deleteUserUseCase = deleteUserUseCase
    }
    async handle(request: Request, response: Response): Promise<Response>{
        const {token, userId} = request.params
        const deleted = await this.deleteUserUseCase.execute(token, userId)
        return response.json(deleted)
    }
}