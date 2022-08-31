import IUsersRepository from "./IUsersRepository";
import Database from "../../../database";
import IUser from "../models/IUser";
import IUserData from "../models/IUserData";
import IUserAuthResponse from "../models/IUserAuthResponse";
import IUserSummary from "../models/IUserSummary";
import IEditUserData from "../models/IEditUserData";

export default class UsersRepository implements IUsersRepository {
    database: Database
    constructor(database: Database) {
        this.database = database
    }


    async listAllUsers(): Promise<IUser[]> {
        const allCompanies = await this.database.listAllUsers()
        return allCompanies
    }
    async createUser({ name, email, password, cpf }: IUserData, token: string): Promise<boolean> {
        const isExistsEmployee = await this.database.createUser({ name, email, password, cpf }, token)
        return isExistsEmployee
    }
    async editUser({ name, email, password, cpf }: IEditUserData, token: string, userId: string): Promise<boolean> {
        const edited = await this.database.editUser({ name, email, password, cpf }, token, userId)
        return edited
    }
    async userAuth({ email, password }): Promise<IUserAuthResponse | boolean> {
        const auth = await this.database.userAuth({ email, password })
        return auth
    }

    async userSummary(token: string): Promise<IUserSummary>  {
        const summary = await this.database.userSummary(token)
        return summary
    }
    async deleteUser(token: string, userId: string): Promise<boolean>{
        const deleted = await this.database.deleteUser(token, userId)
        return deleted
    }
}