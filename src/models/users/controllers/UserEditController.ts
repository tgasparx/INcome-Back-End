import { Request, Response } from "express"
import IUserEditUseCase from "../useCases/IUserEditUseCase"
import IUserEditController from "./IUserEditController"


export default class UserEditController implements IUserEditController{
    userEditUseCase: IUserEditUseCase
    constructor(userEditUseCase: IUserEditUseCase){
        this.userEditUseCase = userEditUseCase
    }

    async handle(request: Request,response: Response): Promise<Response>{
        const {token, userId} = request.params
        const {name, email, password, cpf} = request.body
        const edited = await this.userEditUseCase.execute({name, email, password, cpf}, token, userId)
        return response.json(edited)
    }
}