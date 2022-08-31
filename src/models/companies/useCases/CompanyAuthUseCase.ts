import ICompanyAuthReponse from "../models/ICompanyAuthResponse"
import ICompanyAuthUseCase from "./ICompanyAuthUseCase"


export default class CompanyAuthUseCase implements ICompanyAuthUseCase{
    companiesRepository: any
    constructor(companiesRepository){
        this.companiesRepository = companiesRepository
    }
    async execute({email, password}): Promise<ICompanyAuthReponse | false>{
        const auth = await this.companiesRepository.authCompany({email, password})
        return auth
    }
}