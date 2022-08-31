import ICompany from "../models/ICompany";
import { ICompaniesRepository } from "../repositories/ICompaniesRepository";


export default interface ICompanyDataUseCase{
    companiesRepository: ICompaniesRepository
    execute: (token: string) => Promise<ICompany>
}