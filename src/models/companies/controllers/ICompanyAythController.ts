import { Request, Response } from "express";
import ICompanyAuthUseCase from "../useCases/ICompanyAuthUseCase";


export default interface ICompanyAuthController{
    companyAuthUseCase: ICompanyAuthUseCase
    handle: (request: Request, response: Response) => Promise<Response>
}