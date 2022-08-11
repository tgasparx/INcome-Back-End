export default class CompanyDataUseCase{
    companiesRepository: any
constructor(companiesRepository: any){
    this.companiesRepository = companiesRepository
}
async execute(token: string){
  const data = await this.companiesRepository.companyData(token)
    return data
}
}