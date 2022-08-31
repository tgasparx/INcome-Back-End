import Database from "../../../database"
import { Companies } from "../../../database/Models/company.entity"
import IChangePasswordData from "../models/IChangePasswordData"
import ICompany from "../models/ICompany"
import ICompanyAuthData from "../models/ICompanyAuthData"
import ICompanyAuthReponse from "../models/ICompanyAuthResponse"
import ICompanyData from "../models/ICompanyData"
import ICompanySummary from "../models/ICompanySummary"
import IEditCompanyData from "../models/IEditCompanyData"
import IListEmployees from "../models/IListEmployees"
import { ICompaniesRepository } from "./ICompaniesRepository"

export default class CompaniesRepository implements ICompaniesRepository{
    database: Database
    constructor(database: Database) {
        this.database = database
    }

    async listAllCompanies(): Promise<Companies[] | boolean>  {
        const allCompanies = await this.database.listAllCompanies()
        return allCompanies
    }
    async createCompany(companyData: ICompanyData): Promise<boolean>  {
        const isExistsEmployee = await this.database.createCompany(companyData)
        return isExistsEmployee
    }
    async authCompany({ email, password }: ICompanyAuthData): Promise<ICompanyAuthReponse | false>  {
        const auth = await this.database.companyAuth({ email, password })
        return auth
    }
    async editCompany({ name, email, cnpj }: IEditCompanyData, token: string): Promise<boolean>  {
        const edited = await this.database.editCompany({ name, email, cnpj }, token)
        return edited
    }
    async deleteCompany(token: string, password: string): Promise<boolean>  {
        const deleted = await this.database.deleteCompany(token, password)
        return deleted
    }
   
    async companySummary(token: string): Promise<ICompanySummary | boolean> {
        const summary = await this.database.companySummary(token)
        return summary
    }
    async listCompanyEmployees(token: string): Promise<IListEmployees | boolean>  {
        console.log(token)
        const employees = await this.database.listCompanyEmployees(token)
        return employees
    }

    async companyData(token: string): Promise<ICompany> {
        const data = await this.database.companyData(token)
        return data
    }
    async changePassword({ password, newPassword }: IChangePasswordData, token: string): Promise<boolean> {
        const changed = await this.database.changePassword({ password, newPassword }, token)
        return changed
    }
}