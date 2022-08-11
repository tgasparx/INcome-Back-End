import { stringify } from "querystring"

export default class CompaniesRepository{
    database: any
constructor(database: any){
    this.database = database
}

async listAllCompanies(){
    const allCompanies = await this.database.listAllCompanies()
    return allCompanies
}
   async createCompany(companyData){
        const isExistsEmployee = await this.database.createCompany(companyData)
        return isExistsEmployee
    }
async editCompany({name, cnpj}: any, token: any){
    const edited = await this.database.editCompany({name, cnpj}, token)
    return edited

}
async authCompany({email, password}){
    const auth = await this.database.companyAuth({email, password})
    return auth
}
async companySummary(token: string){
    const summary = await this.database.companySummary(token)
    return summary
}
async listCompanyEmployees(token: string){
    console.log(token)
    const employees = await this.database.listCompanyEmployees(token)
    return employees
}
async deleteCompany(token: string, password: string){
    const deleted = await this.database.deleteCompany(token, password)
    return deleted
}
}