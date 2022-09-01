import { Request, Response } from "express"
import IEditCompanyData from "../models/IEditCompanyData"
import ICompanyEditUseCase from "../useCases/ICompanyEditUseCase"
import ICompanyEditController from "./ICompanyEditController"


export default class CompanyEditController implements ICompanyEditController{
   companyEditUseCase: ICompanyEditUseCase
   constructor(companyEditUseCase: ICompanyEditUseCase){
      this.companyEditUseCase = companyEditUseCase
   }
   async handle(request: Request, response: Response): Promise<Response>{
      const {token} = request.params
      const {name, email,cnpj }: IEditCompanyData = request.body
      const edited = await this.companyEditUseCase.execute({name, email, cnpj}, token)
      if(edited){
         response.status(202)
        return response.send("Companhia editada com sucesso")
      }else{
         response.status(400)
         return response.send("CNPJ ou Email informados, já estão cadastrados")
      }
   
   }
}