

export default class CompanyAuthController{
    companyAuthUseCase: any
    constructor(companyAuthUseCase: any){
        this.companyAuthUseCase = companyAuthUseCase
    }
    async handle(request, response){
        const {email, password} = request.body
        const auth = await this.companyAuthUseCase.execute({email, password})
        if(auth){
        return response.status(200).json(auth)
        }else{
            return response.status(406).send()
        }

    }
}