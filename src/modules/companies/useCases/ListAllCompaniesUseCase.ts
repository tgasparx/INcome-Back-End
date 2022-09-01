import { Companies } from "../../../database/Models/company.entity"
import { ICompaniesRepository } from "../repositories/ICompaniesRepository"



export default class ListAllCompaniesUseCase {
    companiesRepository: ICompaniesRepository
    constructor(companiesRepository: ICompaniesRepository) {
        this.companiesRepository = companiesRepository
    }

    async execute(): Promise<Companies[] | false> {
    const created = await this.companiesRepository.listAllCompanies()
    return created
    }
}