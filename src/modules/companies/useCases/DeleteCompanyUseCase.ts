import { ICompaniesRepository } from "../repositories/ICompaniesRepository"
import IDeleteCompanyUseCase from "./IDeleteCompanyUseCase"


export default class DeleteCompanyUseCase implements IDeleteCompanyUseCase{
    companiesRepository: ICompaniesRepository
    constructor(companiesRepository: ICompaniesRepository){
        this.companiesRepository = companiesRepository
    }

    async execute(token: string, password: string): Promise<boolean>{
        const deleted = await this.companiesRepository.deleteCompany(token, password)
        return deleted
    }
}