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
        if(edited){
            response.status(202)
            return response.send("Usuário editado com sucesso")
        }else{
            response.status(406)
            return response.send("Companhia não encontrada")
        }
    }
}