import IListEmployees from "../models/IListEmployees"
import { ICompaniesRepository } from "../repositories/ICompaniesRepository"
import IListCompanyEmployeesUseCase from "./IListCompanyEmployeesUseCase"


export default class ListCompanyEmployeesUseCase implements IListCompanyEmployeesUseCase{
    companiesRepository : ICompaniesRepository
    constructor(companiesRepository: ICompaniesRepository){
this.companiesRepository = companiesRepository
    }
    async execute(token: string): Promise<IListEmployees | boolean>{
        const employees = await this.companiesRepository.listCompanyEmployees(token)
        return employees
    }
}