


export default class CreateNewCompanyUseCase {
    companiesRepository: any
    constructor(companiesRepository: any) {
        this.companiesRepository = companiesRepository
    }

    async execute(companyData) {
    const created = await this.companiesRepository.createCompany(companyData)
    return created
    }
}