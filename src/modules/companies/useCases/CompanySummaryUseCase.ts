import ICompanySummary from "../models/ICompanySummary"
import { ICompaniesRepository } from "../repositories/ICompaniesRepository"
import ICompanySummaryUseCase from "./ICompanySummaryUseCase"

export default class CompanySummaryUseCase implements ICompanySummaryUseCase{
    companiesRepository: ICompaniesRepository
    constructor(companiesRepository: ICompaniesRepository){
        this.companiesRepository = companiesRepository
    }
    async execute(token: string): Promise<ICompanySummary | false> {
        const summary = await this.companiesRepository.companySummary(token)
        return summary

    }
}