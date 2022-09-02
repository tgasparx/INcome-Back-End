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
        const deleted: boolean = await this.deleteUserUseCase.execute(token, userId)
        if(deleted){
            response.status(200)
            return response.send("Motorista deletado com sucesso")
        }else{
            response.status(406)
            return response.send("Motorista não encontrado, ou o motorista possui pedidos assinados, ou acesso não permitido")
        }
        
    }
}