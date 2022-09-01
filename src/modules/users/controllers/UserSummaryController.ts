import { Request, Response } from "express"
import IUserSummaryUseCase from "../useCases/IUserSummaryUserCase"
import IUserSummaryController from "./IUserSummaryController"

export default class UserSummaryController implements IUserSummaryController{
    userSummaryUseCase: IUserSummaryUseCase
    constructor(userSummaryUseCase: IUserSummaryUseCase){
        this.userSummaryUseCase = userSummaryUseCase
    }
    async handle(request: Request, response: Response): Promise<Response>{
        const {token} = request.params
        const summary = await this.userSummaryUseCase.execute(token)
        return response.json(summary)
    }
}