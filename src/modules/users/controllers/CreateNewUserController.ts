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
        const newUser = await this.createNewUserUseCase.execute({name, email, password, cpf}, token)
        return response.json(newUser)
    }
}