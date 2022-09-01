import { Response, Request } from "express"
import IChangePasswordUseCase from "../useCases/IChangePasswordUseCase"
import IChangePasswordController from "./IChangePasswordController"


export default class ChangePasswordController implements IChangePasswordController{
    changePasswordUseCase: IChangePasswordUseCase
    constructor(changePasswordUseCase: IChangePasswordUseCase){
        this.changePasswordUseCase = changePasswordUseCase
    }
    async handle(request: Request, response: Response): Promise<Response>{
        const {password, newPassword} = request.body
        const {token} = request.params
        const changed = await this.changePasswordUseCase.execute({password, newPassword}, token)
        if(changed){
            response.status(202)
            return response.send("Senha alterada com sucesso")
        }else{
            response.status(406)
           return response.send("Senha incorreta, ou a companhia não foi encontrada")
        }
        
    }
}