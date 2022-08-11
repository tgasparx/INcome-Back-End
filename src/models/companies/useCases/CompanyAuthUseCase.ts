

export default class CompanyAuthUseCase{
    companiesRepository: any
    constructor(companiesRepository){
        this.companiesRepository = companiesRepository
    }
    async execute({email, password}){
        const auth = await this.companiesRepository.authCompany({email, password})
        return auth
    }
}