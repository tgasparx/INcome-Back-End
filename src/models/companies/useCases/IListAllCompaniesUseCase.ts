import { ICompaniesRepository } from "../repositories/ICompaniesRepository";


export default class IListAllCompaniesUseCase{
    companiesRepository: ICompaniesRepository
    execute: () => Promise<any>
}