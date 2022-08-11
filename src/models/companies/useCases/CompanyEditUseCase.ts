export default class CompanyEditUseCase {
    companiesRepository: any
    constructor(companiesRepository: any) {
        this.companiesRepository = companiesRepository
    }
async execute({name, cnpj}: any, token: any){
    const edited = await this.companiesRepository.editCompany({name, cnpj}, token)
    return edited

}
}