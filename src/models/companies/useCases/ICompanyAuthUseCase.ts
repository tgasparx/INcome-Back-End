import ICompanyAuthData from "../models/ICompanyAuthData";
import ICompanyAuthReponse from "../models/ICompanyAuthResponse";
import { ICompaniesRepository } from "../repositories/ICompaniesRepository";


export default interface ICompanyAuthUseCase{
    companiesRepository: ICompaniesRepository
    execute: ({}:ICompanyAuthData) => Promise<ICompanyAuthReponse | false>
}