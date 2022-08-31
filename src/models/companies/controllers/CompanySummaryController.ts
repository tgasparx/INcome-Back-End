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
        return response.json(summary)
    }
}