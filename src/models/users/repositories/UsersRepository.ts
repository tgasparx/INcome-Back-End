import IUsersRepository from "./IUsersRepository";
import Database from "../../../database";

export default class UsersRepository implements IUsersRepository{
    database: any
constructor(database: any){
    this.database = database
}


    async listAllUsers(){
        const allCompanies = await this.database.listAllCompanies()
        return allCompanies
    }
       async createUser({name, email, password, cpf}: any, token: string){
            const isExistsEmployee = await this.database.createUser({name, email, password, cpf}, token)
            return isExistsEmployee
        }
    async authUser({email, password}){
        const auth = await this.database.companyAuth({email, password})
        return auth
    }
    async userSummary(token: string){
        const summary = await this.database.userSummary(token)
        return summary
    }
}