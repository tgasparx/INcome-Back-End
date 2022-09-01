import IDatabase from "../../../database/IDatabase"
import IEditUserData from "../models/IEditUserData"
import IUser from "../models/IUser"
import IUserAuthResponse from "../models/IUserAuthResponse"
import IUserData from "../models/IUserData"
import IUserSummary from "../models/IUserSummary"


export default interface IUsersRepository{
    database: IDatabase
    listAllUsers: () => Promise<IUser[] | false> 
    createUser: ({ name, email, password, cpf }: IUserData, token: string) => Promise<boolean>
    editUser: ({ name, email, password, cpf }: IEditUserData, token: string, userId: string) => Promise<boolean> 
    userAuth: ({ email, password }) => Promise<IUserAuthResponse | false>
    userSummary: (token: string) => Promise<IUserSummary | false>
    userData: (token: string) => Promise<IUser | false>
    deleteUser: (token: string, userId: string) => Promise<boolean>
}