import { ICompaniesRepository } from "../repositories/ICompaniesRepository"



export default interface IMemorizedAuthCompanyUseCase{
    companiesRepository: ICompaniesRepository
    execute: () => Promise<any>
}