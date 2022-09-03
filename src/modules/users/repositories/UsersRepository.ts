import IUsersRepository from "./IUsersRepository";
import IUser from "../models/IUser";
import IUserData from "../models/IUserData";
import IUserAuthResponse from "../models/IUserAuthResponse";
import IUserSummary from "../models/IUserSummary";
import IEditUserData from "../models/IEditUserData";
import IDatabase from "../../../database/IDatabase";

export default class UsersRepository implements IUsersRepository {
    database: IDatabase
    constructor(database: IDatabase) {
        this.database = database
    }


    async listAllUsers(): Promise<IUser[] | false> {
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
    async userAuth({ email, password }): Promise<IUserAuthResponse | false> {
        const auth = await this.database.userAuth({ email, password })
        return auth
    }

    async userSummary(token: string): Promise<IUserSummary | false>  {
        const summary = await this.database.userSummary(token)
        return summary
    }
    async userData(token: string): Promise<IUserAuthResponse | false>{
        const userData = await this.database.userData(token)
        return userData
    }
    async deleteUser(token: string, userId: string): Promise<boolean>{
        const deleted = await this.database.deleteUser(token, userId)
        return deleted
    }
}