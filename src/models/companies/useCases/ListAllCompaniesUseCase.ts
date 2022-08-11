


export default class ListAllCompaniesUseCase {
    companiesRepository: any
    constructor(companiesRepository: any) {
        this.companiesRepository = companiesRepository
    }

    async execute() {
    const created = await this.companiesRepository.listAllCompanies()
    return created
    }
}