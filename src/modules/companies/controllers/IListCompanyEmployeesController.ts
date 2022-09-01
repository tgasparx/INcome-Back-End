import { Request, Response } from "express";
import IListCompanyEmployeesUseCase from "../useCases/IListCompanyEmployeesUseCase";



export default interface IListCompanyEmployeesController{
    listCompanyEmployeesUseCase: IListCompanyEmployeesUseCase
    handle: (request: Request, response: Response) => Promise<Response>
}