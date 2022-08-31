import { Request, Response } from "express";
import ICompanySummaryUseCase from "../useCases/ICompanySummaryUseCase";


export default interface ICompanySummaryController{
    companySummaryUseCase: ICompanySummaryUseCase
    handle: (request: Request, response: Response) => Promise<Response>
}