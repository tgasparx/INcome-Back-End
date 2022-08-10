import { Request, Response } from "express"



export default class CreateNewCompanyController {
    createNewCompanyUseCase: any
    constructor(createNewCompanyUseCase: any) {
        this.createNewCompanyUseCase = createNewCompanyUseCase
    }

    async handle(request: Request, response: Response) {
        const {
        
            company_name,
            company_email,
            company_password,
            company_cnpj,
        } = request.body
     
        const companyData = {
            company_name,
            company_email,
            company_password,
            company_cnpj,
        }
        console.log(companyData)
        const created = await this.createNewCompanyUseCase.execute(companyData)
        if(created){
            return response.status(201).send("Compania criada com sucesso")///////////////////////////////////////
        }else{
            return response.status(406).send("Erro")
        }
        
    }
}