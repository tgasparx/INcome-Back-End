import IUsersRepository from "./IUsersRepository";
import Database from "../../../database";

export default class UsersRepository implements IUsersRepository {
    database: Database
    constructor(database: Database) {
        this.database = database
    }


    async listAllUsers() {
        const allCompanies = await this.database.listAllUsers()
        return allCompanies
    }
    async createUser({ name, email, password, cpf }: any, token: string) {
        const isExistsEmployee = await this.database.createUser({ name, email, password, cpf }, token)
        return isExistsEmployee
    }
    async userAuth({ email, password }) {
        const auth = await this.database.userAuth({ email, password })
        return auth
    }
    async editUser({ name, email, password, cpf }: any, token: any, userId) {
        const edited = await this.database.editUser({ name, email, password, cpf }, token, userId)
        return edited
    }
    async userSummary(token: string) {
        const summary = await this.database.userSummary(token)
        return summary
    }
    async deleteUser(token: string, userId: string){
        const deleted = await this.database.deleteUser(token, userId)
        return deleted
    }
}