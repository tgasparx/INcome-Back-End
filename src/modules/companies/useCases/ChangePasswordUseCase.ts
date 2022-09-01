import IChangePasswordData from "../models/IChangePasswordData"
import { ICompaniesRepository } from "../repositories/ICompaniesRepository"
import IChangePasswordUseCase from "./IChangePasswordUseCase"



export default class ChangePasswordUseCase implements IChangePasswordUseCase{
    companiesRepository: ICompaniesRepository
    constructor(companiesRepository: ICompaniesRepository){
        this.companiesRepository = companiesRepository
    }

    async execute({password, newPassword}: IChangePasswordData, token: string): Promise<boolean>{
        const changed = await this.companiesRepository.changePassword({password, newPassword}, token)
        return changed
    }
}