import { ICompaniesRepository } from "../repositories/ICompaniesRepository";


export default interface IDeleteCompanyUseCase{
    companiesRepository: ICompaniesRepository
    execute: (token: string, password: string) => Promise<boolean>
}