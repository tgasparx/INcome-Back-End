import Database from "../../../database"

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
async authCompany({email, password}){
    const auth = await this.database.companyAuth({email, password})
    return auth
}
async companySummary(){
    const summary = await this.database.companySummary()
    return summary
}
}