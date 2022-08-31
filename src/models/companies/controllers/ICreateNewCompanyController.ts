import { Request, Response } from "express";
import ICreateNewCompanyUseCase from "../useCases/ICreateNewCompanyUseCase";


export default interface ICreateNewCompanyController{
    createNewCompanyUseCase: ICreateNewCompanyUseCase
    handle:(request: Request, response: Response) => Promise<Response>
}