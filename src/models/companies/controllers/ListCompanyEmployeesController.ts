

export default class ListCompanyEmployeesController{
    listCompanyEmployeesUseCase: any
    constructor(listCompanyEmployeesUseCase: any){
        this.listCompanyEmployeesUseCase = listCompanyEmployeesUseCase
    }
    async handle(request, response){
        const {token} = request.params
        const employees = await this.listCompanyEmployeesUseCase.execute(token)
    return response.json(employees)
    }
}