import { Request, Response } from "express";
import IDeleteCompanyUseCase from "../useCases/IDeleteCompanyUseCase";


export default interface IDeleteCompanyController{
    deleteCompanyUseCase: IDeleteCompanyUseCase
    handle: (request: Request, response: Response) => Promise<Response>
}