import ICompanyData from "../models/ICompanyData";
import { ICompaniesRepository } from "../repositories/ICompaniesRepository";


export default interface ICreateNewCompanyUseCase{
    companiesRepository: ICompaniesRepository
    execute: (companyData: ICompanyData) => Promise<boolean>
}