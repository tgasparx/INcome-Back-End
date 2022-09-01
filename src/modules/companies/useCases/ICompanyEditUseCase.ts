import IEditCompanyData from "../models/IEditCompanyData";
import { ICompaniesRepository } from "../repositories/ICompaniesRepository";


export default class ICompanyEditUseCase{
    companiesRepository: ICompaniesRepository
    execute: ({}:IEditCompanyData, token: string) => Promise<boolean>
}