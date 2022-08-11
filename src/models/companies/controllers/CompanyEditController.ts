

export default class CompanyEditController{
   companyEditUseCase: any
   constructor(companyEditUseCase){
      this.companyEditUseCase = companyEditUseCase
   }
   async handle(request, response){
      const {token} = request.params
      const {name, email,cnpj} = request.body
      const edited = await this.companyEditUseCase.execute({name, email, cnpj}, token)
    return response.json(edited)
   }
}