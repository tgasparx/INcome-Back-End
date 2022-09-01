import { Request, Response } from "express";
import ICompanyDataUseCase from "../useCases/ICompanyDataUseCase";


export default interface ICompanyDataController{
    companyDataUseCase: ICompanyDataUseCase
    handle: (request: Request, response: Response) => Promise<Response>
}