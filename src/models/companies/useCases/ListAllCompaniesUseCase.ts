import { ICompaniesRepository } from "../repositories/ICompaniesRepository"



export default class ListAllCompaniesUseCase {
    companiesRepository: ICompaniesRepository
    constructor(companiesRepository: ICompaniesRepository) {
        this.companiesRepository = companiesRepository
    }

    async execute() {
    const created = await this.companiesRepository.listAllCompanies()
    return created
    }
}