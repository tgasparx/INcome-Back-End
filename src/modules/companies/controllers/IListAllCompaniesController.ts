import { Request, Response } from "express";
import IListAllCompaniesUseCase from "../useCases/IListAllCompaniesUseCase";


export default interface IListAllCompaniesController{
    listAllCompaniesUseCase: IListAllCompaniesUseCase
    handle: (request: Request, response: Response) => Promise<Response>
}