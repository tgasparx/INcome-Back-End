import { Request, Response } from "express"
import ICompanySummaryUseCase from "../useCases/ICompanySummaryUseCase"
import ICompanySummaryController from "./ICompanySummaryController"


export default class CompanySummaryController implements ICompanySummaryController {
    companySummaryUseCase: ICompanySummaryUseCase
    constructor(companySummaryUseCase: ICompanySummaryUseCase) {
        this.companySummaryUseCase = companySummaryUseCase
    }
    async handle(request: Request, response: Response) {
        const { token } = request.params
        const summary = await this.companySummaryUseCase.execute(token)
        if(summary){
            response.status(200)
            return response.json(summary)
        }else{
            response.status(406)
            return response.send("Companhia não encontrada")
        }
    }
}