import { Request, Response } from "express"
import ICompanyAuthUseCase from "../useCases/ICompanyAuthUseCase"
import ICompanyAuthController from "./ICompanyAythController"


export default class CompanyAuthController implements ICompanyAuthController{
    companyAuthUseCase: ICompanyAuthUseCase
    constructor(companyAuthUseCase: any){
        this.companyAuthUseCase = companyAuthUseCase
    }
    async handle(request: Request, response: Response): Promise<Response>{
        const {email, password} = request.body
        const auth = await this.companyAuthUseCase.execute({email, password})
        if(auth){
            response.status(200)
        return response.json(auth)
        }else{
          response.status(406)
          return response.send("Usuário ou senha inválido")
           
        }

    }
}