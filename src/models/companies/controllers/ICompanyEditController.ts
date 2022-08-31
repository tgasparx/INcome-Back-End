import { Request, Response } from "express";
import ICompanyEditUseCase from "../useCases/ICompanyEditUseCase";


export default interface ICompanyEditController{
    companyEditUseCase: ICompanyEditUseCase
    handle: (request: Request, response: Response) => Promise<Response>
}