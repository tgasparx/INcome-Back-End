export default class DeleteCompanyController{
    deleteCompanyUseCase: any
    constructor(deleteCompanyUseCase){
        this.deleteCompanyUseCase = deleteCompanyUseCase
    }
    async handle(request,response){
        const {token} = request.params
        const {password} = request.body
        const deleted = await this.deleteCompanyUseCase.execute(token, password)
        return response.json(deleted)
    }
}