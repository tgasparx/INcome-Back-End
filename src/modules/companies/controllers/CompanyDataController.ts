import { Request, Response } from "express"
import ICompanyDataUseCase from "../useCases/ICompanyDataUseCase"
import ICompanyDataController from "./ICompanyDataController"


export default class CompanyDataController implements ICompanyDataController{
    companyDataUseCase: ICompanyDataUseCase
    constructor(companyDataUseCase: ICompanyDataUseCase){
this.companyDataUseCase = companyDataUseCase
    }
    async handle(request: Request, response: Response): Promise<Response>{
        const {token} = request.params
        const data = await this.companyDataUseCase.execute(token)
        if(data){
            response.status(200)
            return response.json(data)
        }else{
            response.status(406)
            return response.send("Companhia não encontrada")
        }
    }
}