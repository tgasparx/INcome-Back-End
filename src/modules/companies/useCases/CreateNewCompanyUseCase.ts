import ICompanyData from "../models/ICompanyData"
import { ICompaniesRepository } from "../repositories/ICompaniesRepository"
import ICreateNewCompanyUseCase from "./ICreateNewCompanyUseCase"



export default class CreateNewCompanyUseCase  implements ICreateNewCompanyUseCase{
    companiesRepository: ICompaniesRepository
    constructor(companiesRepository: ICompaniesRepository) {
        this.companiesRepository = companiesRepository
    }

    async execute(companyData: ICompanyData): Promise<boolean> {
    const created = await this.companiesRepository.createCompany(companyData)
    return created
    }
}