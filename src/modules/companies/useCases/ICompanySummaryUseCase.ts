import ICompanySummary from "../models/ICompanySummary";
import { ICompaniesRepository } from "../repositories/ICompaniesRepository";


export default interface ICompanySummaryUseCase{
    companiesRepository: ICompaniesRepository
    execute: (token: string) => Promise<ICompanySummary | boolean> 
}