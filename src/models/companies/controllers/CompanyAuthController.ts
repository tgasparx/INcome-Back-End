

export default class CompanyAuthController{
    companyAuthUseCase: any
    constructor(companyAuthUseCase: any){
        this.companyAuthUseCase = companyAuthUseCase
    }
    async handle(request, response){
        const {email, password} = request.body
        const auth = await this.companyAuthUseCase.execute({email, password})
        if(auth){
            response.status(200)
        return response.json(auth)
        }else{
          response.status(406)
          return response.json({erro: ""})
           
        }

    }
}