import { Request, Response } from "express"
import IUserAuthUseCase from "../useCases/IUserAuthUseCase"
import IUserAuthController from "./IUserAuthController"

export default class UserAuthController implements IUserAuthController{
    userAuthUseCase: IUserAuthUseCase
constructor(userAuthUseCase: IUserAuthUseCase){
    this.userAuthUseCase = userAuthUseCase
}

    async handle(request: Request, response: Response): Promise<Response>{
        const {email, password} = request.body
        const auth = await this.userAuthUseCase.execute({email, password})
        return response.json(auth)
    }
}