import ICompany from "../models/ICompany"
import { ICompaniesRepository } from "../repositories/ICompaniesRepository"
import ICompanyDataUseCase from "./ICompanyDataUseCase"

export default class CompanyDataUseCase implements ICompanyDataUseCase{
    companiesRepository: ICompaniesRepository
constructor(companiesRepository: ICompaniesRepository){
    this.companiesRepository = companiesRepository
}
async execute(token: string): Promise<ICompany | false>{
  const data = await this.companiesRepository.companyData(token)
    return data
}
}