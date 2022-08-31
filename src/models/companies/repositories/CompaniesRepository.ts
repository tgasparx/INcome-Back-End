import Database from "../../../database"
import ICompanyData from "../models/ICompanyData"

export default class CompaniesRepository {
    database: Database
    constructor(database: Database) {
        this.database = database
    }

    async listAllCompanies(): Promise<any>  {
        const allCompanies = await this.database.listAllCompanies()
        return allCompanies
    }
    async createCompany(companyData: ICompanyData): Promise<any>  {
        const isExistsEmployee = await this.database.createCompany(companyData)
        return isExistsEmployee
    }
    async editCompany({ name, email, cnpj }: any, token: string): Promise<any>  {
        const edited = await this.database.editCompany({ name, email, cnpj }, token)
        return edited

    }
    async authCompany({ email, password }): Promise<any>  {
        const auth = await this.database.companyAuth({ email, password })
        return auth
    }
    async companySummary(token: string): Promise<any>  {
        const summary = await this.database.companySummary(token)
        return summary
    }
    async listCompanyEmployees(token: string): Promise<any>  {
        console.log(token)
        const employees = await this.database.listCompanyEmployees(token)
        return employees
    }
    async deleteCompany(token: string, password: string): Promise<any>  {
        const deleted = await this.database.deleteCompany(token, password)
        return deleted
    }
    async companyData(token: string): Promise<any> {
        const data = await this.database.companyData(token)
        return data
    }
    async changePassword({ password, newPassword }: any, token: string): Promise<boolean> {
        const changed = await this.database.changePassword({ password, newPassword }, token)
        return changed
    }
}