import { Request, Response } from "express"
import IListAllCompaniesController from "./IListAllCompaniesController"



export default class ListAllCompaniesController implements IListAllCompaniesController{
    listAllCompaniesUseCase: any
    constructor(listAllCompaniesUseCase: any) {
        this.listAllCompaniesUseCase = listAllCompaniesUseCase
    }

    async handle(request: Request, response: Response) {
        const created = await this.listAllCompaniesUseCase.execute()
        if(created){
            response.status(200)
            return response.json(created)
        }else{
            response.status(400)
            response.send("Não foram encontradas companhias")
        }
        
    }
}