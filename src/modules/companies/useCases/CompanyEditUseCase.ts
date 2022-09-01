import IEditCompanyData from "../models/IEditCompanyData"
import { ICompaniesRepository } from "../repositories/ICompaniesRepository"
import ICompanyEditUseCase from "./ICompanyEditUseCase"

export default class CompanyEditUseCase implements ICompanyEditUseCase{
    companiesRepository: ICompaniesRepository
    constructor(companiesRepository: ICompaniesRepository) {
        this.companiesRepository = companiesRepository
    }
async execute({name, email,cnpj}: IEditCompanyData, token: string): Promise<boolean>{
    const edited = await this.companiesRepository.editCompany({name, email,cnpj}, token)
    return edited

}
}