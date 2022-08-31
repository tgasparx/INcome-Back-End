import { Request, Response } from "express"
import ICreateNewCompanyUseCase from "../useCases/ICreateNewCompanyUseCase"
import ICreateNewCompanyController from "./ICreateNewCompanyController"



export default class CreateNewCompanyController implements ICreateNewCompanyController{
    createNewCompanyUseCase: ICreateNewCompanyUseCase
    constructor(createNewCompanyUseCase: ICreateNewCompanyUseCase) {
        this.createNewCompanyUseCase = createNewCompanyUseCase
    }

    async handle(request: Request, response: Response): Promise<Response> {
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
        const created = await this.createNewCompanyUseCase.execute(companyData)
        if(created){
            return response.status(201).send("Compania criada com sucesso")///////////////////////////////////////
        }else{
            return response.status(406).send("Erro, email ou CNPJ já cadastrados")
        }
        
    }
}