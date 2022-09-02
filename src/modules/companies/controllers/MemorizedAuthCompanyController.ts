import { Request, Response } from "express";
import IMemorizedAuthCompanyUseCase from "../useCases/IMemorizedAuthCompanyUseCase";
import IMemorizedAuthCompanyController from "./IMemorizedAuthCompanyController";



export default class MemorizedAuthCompanyController implements IMemorizedAuthCompanyController{
    memorizedAuthCompanyUseCase: IMemorizedAuthCompanyUseCase
    constructor(memorizedAuthCompanyUseCase: IMemorizedAuthCompanyUseCase){
        this.memorizedAuthCompanyUseCase = memorizedAuthCompanyUseCase
    }
    async handle (request: Request, response: Response): Promise<Response>{
        const logged = await this.memorizedAuthCompanyUseCase.execute()
        if(logged){
            response.status(200)
            return response.json(logged)
        }else{
            response.status(406)
            return response.send("Acesso não autorizado")
        }
    }
}