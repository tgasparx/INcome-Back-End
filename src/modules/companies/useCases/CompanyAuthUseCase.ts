import ICompanyAuthReponse from "../models/ICompanyAuthResponse"
import { ICompaniesRepository } from "../repositories/ICompaniesRepository"
import ICompanyAuthUseCase from "./ICompanyAuthUseCase"


export default class CompanyAuthUseCase implements ICompanyAuthUseCase{
    companiesRepository: ICompaniesRepository
    constructor(companiesRepository: ICompaniesRepository){
        this.companiesRepository = companiesRepository
    }
    async execute({email, password}): Promise<ICompanyAuthReponse | false>{
        const auth = await this.companiesRepository.authCompany({email, password})
        return auth
    }
}