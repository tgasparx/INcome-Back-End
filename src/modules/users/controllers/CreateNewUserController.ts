import { Request, Response } from "express"
import ICreateNewUserUseCase from "../useCases/ICreateNewUserUseCase"
import ICreateNewUserController from "./ICreateNewUserController"


export default class CreateNewUserController implements ICreateNewUserController{
    createNewUserUseCase: ICreateNewUserUseCase
    constructor(createNewUserUseCase: ICreateNewUserUseCase){
        this.createNewUserUseCase = createNewUserUseCase
    }
    
    async handle(request: Request, response: Response): Promise<Response>{
        const {name, email, password, cpf} = request.body
        const {token} = request.params
        const newUser: boolean = await this.createNewUserUseCase.execute({name, email, password, cpf}, token)
        if(newUser){
            response.status(201)
            return response.send("Usuário criado com sucesso")
        }else{
            response.status(406)
            return response.send("Email ou CPF já estão cadastrados")
        }
        
    }
}