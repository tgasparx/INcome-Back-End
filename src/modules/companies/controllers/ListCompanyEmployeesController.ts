import { Request, Response } from "express"
import IListCompanyEmployeesUseCase from "../useCases/IListCompanyEmployeesUseCase"


export default class ListCompanyEmployeesController{
    listCompanyEmployeesUseCase: IListCompanyEmployeesUseCase
    constructor(listCompanyEmployeesUseCase: IListCompanyEmployeesUseCase){
        this.listCompanyEmployeesUseCase = listCompanyEmployeesUseCase
    }
    async handle(request: Request, response: Response): Promise<Response>{
        const {token} = request.params
        const employees = await this.listCompanyEmployeesUseCase.execute(token)
        if(employees){
            response.status(200)
            return response.json(employees)
        }else{
            response.status(400)
            return response.send("Ocorreu um erro interno")
        }

    }
}