import { ICompaniesRepository } from "../repositories/ICompaniesRepository";
import IMemorizedAuthCompanyUseCase from "./IMemorizedAuthCompanyUseCase";



export default class MemorizedAuthCompanyUseCase implements IMemorizedAuthCompanyUseCase{
    companiesRepository: ICompaniesRepository
    constructor(companiesRepository: ICompaniesRepository){
        this.companiesRepository = companiesRepository
    }
    async execute(): Promise<any>{
        const logged = await this.companiesRepository.memorizedAuth()
        return logged
    }
}