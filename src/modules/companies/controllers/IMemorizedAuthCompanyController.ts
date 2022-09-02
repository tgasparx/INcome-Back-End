import { Request, Response } from "express";
import IMemorizedAuthCompanyUseCase from "../useCases/IMemorizedAuthCompanyUseCase";



export default interface IMemorizedAuthCompanyController{
    memorizedAuthCompanyUseCase: IMemorizedAuthCompanyUseCase
    handle: (request: Request, response: Response) => Promise<Response>
}