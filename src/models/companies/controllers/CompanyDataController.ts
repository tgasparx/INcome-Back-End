

export default class CompanyDataController{
    companyDataUserCase: any
    constructor(companyDataUserCase: any){
this.companyDataUserCase = companyDataUserCase
    }
    async handle(request, response){
        const {token} = request.params
        const data = await this.companyDataUserCase.execute(token)
        return response.json(data)
    }
}