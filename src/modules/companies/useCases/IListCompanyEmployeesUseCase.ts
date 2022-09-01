import IListEmployees from "../models/IListEmployees";
import { ICompaniesRepository } from "../repositories/ICompaniesRepository";



export default interface IListCompanyEmployeesUseCase{
    companiesRepository: ICompaniesRepository
    execute: (token: string) => Promise<IListEmployees | false>

}