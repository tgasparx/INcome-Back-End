import ICreateNewCompanyUseCase from "./ICreateNewCompanyUseCase"



export default class CreateNewCompanyUseCase  implements ICreateNewCompanyUseCase{
    companiesRepository: any
    constructor(companiesRepository: any) {
        this.companiesRepository = companiesRepository
    }

    async execute(companyData) {
    const created = await this.companiesRepository.createCompany(companyData)
    return created
    }
}