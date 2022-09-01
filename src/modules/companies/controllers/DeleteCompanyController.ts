import { Request, Response } from "express"
import IDeleteCompanyUseCase from "../useCases/IDeleteCompanyUseCase"
import IDeleteCompanyController from "./IDeleteCompanyController"

export default class DeleteCompanyController implements IDeleteCompanyController{
    deleteCompanyUseCase: IDeleteCompanyUseCase
    constructor(deleteCompanyUseCase: IDeleteCompanyUseCase){
        this.deleteCompanyUseCase = deleteCompanyUseCase
    }
    async handle(request: Request,response: Response): Promise<Response>{
        const {token} = request.params
        const {password} = request.body
        const deleted = await this.deleteCompanyUseCase.execute(token, password)
        if(deleted){
            response.status(200)
           return response.send("Companhia deletada com sucesso")
        }else{
            response.status(406)
            return response.send("Senha incorreta, ou a companhia não existe")
        }
        
    }
}