

export default class ListCompanyEmployeesUseCase{
    companiesRepository : any
    constructor(companiesRepository: any){
this.companiesRepository = companiesRepository
    }
    async execute(token: string){
        const employees = await this.companiesRepository.listCompanyEmployees(token)
        return employees
    }
}