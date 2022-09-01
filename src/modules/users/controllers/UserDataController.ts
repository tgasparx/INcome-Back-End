import { Request, Response } from "express"
import IUserDataUseCase from "../useCases/IUserDataUseCase"
import IUserDataController from "./IUserDataController"


export default class UserDataController implements IUserDataController{
    userDataUseCase: IUserDataUseCase
    constructor(userDataUseCase: IUserDataUseCase){
        this.userDataUseCase = userDataUseCase
    }
    async handle(request: Request, response: Response): Promise<Response>{
        const {token} = request.params
        const userData = await this.userDataUseCase.execute(token)
        if(userData){
            response.status(200)
           return response.json(userData)
        }else{
            response.status(406)
           return response.send("Ocorreu um erro")
        }
    }
}