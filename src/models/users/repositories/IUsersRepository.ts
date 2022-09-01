import IEditUserData from "../models/IEditUserData"
import IUser from "../models/IUser"
import IUserAuthResponse from "../models/IUserAuthResponse"
import IUserData from "../models/IUserData"
import IUserSummary from "../models/IUserSummary"


export default interface IUsersRepository{
    listAllUsers: () => Promise<IUser[]> 
    createUser: ({ name, email, password, cpf }: IUserData, token: string) => Promise<boolean>
    editUser: ({ name, email, password, cpf }: IEditUserData, token: string, userId: string) => Promise<boolean> 
    userAuth: ({ email, password }) => Promise<IUserAuthResponse | boolean>
    userSummary: (token: string) => Promise<IUserSummary>
    userData: (token: string) => Promise<IUser | boolean>
    deleteUser: (token: string, userId: string) => Promise<boolean>
}