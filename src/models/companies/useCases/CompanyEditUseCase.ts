export default class CompanyEditUseCase {
    companiesRepository: any
    constructor(companiesRepository: any) {
        this.companiesRepository = companiesRepository
    }
async execute({name, email,cnpj}: any, token: any){
    const edited = await this.companiesRepository.editCompany({name, email,cnpj}, token)
    return edited

}
}