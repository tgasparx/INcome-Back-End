import IChangePasswordData from "../models/IChangePasswordData"
import { ICompaniesRepository } from "../repositories/ICompaniesRepository"


export default interface IChangePasswordUseCase{
    companiesRepository: ICompaniesRepository
    execute: ({password, newPassword}: IChangePasswordData, token: string) => Promise<boolean>
}