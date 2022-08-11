

export default class DeleteCompanyUseCase{
    companiesRepository: any
    constructor(companiesRepository){
        this.companiesRepository = companiesRepository
    }

    async execute(token: string, password: string){
        const deleted = await this.companiesRepository.deleteCompany(token, password)
        return deleted
    }
}