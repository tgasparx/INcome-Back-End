import IEditCompanyData from "../models/IEditCompanyData"
import ICompanyEditUseCase from "./ICompanyEditUseCase"

export default class CompanyEditUseCase implements ICompanyEditUseCase{
    companiesRepository: any
    constructor(companiesRepository: any) {
        this.companiesRepository = companiesRepository
    }
async execute({name, email,cnpj}: IEditCompanyData, token: any): Promise<boolean>{
    const edited = await this.companiesRepository.editCompany({name, email,cnpj}, token)
    return edited

}
}