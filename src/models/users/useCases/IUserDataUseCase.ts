import IUser from "../models/IUser"
import IUsersRepository from "../repositories/IUsersRepository"


export default interface IUserDataUseCase{
    usersRepository: IUsersRepository
    execute: (token: string) => Promise<IUser | boolean>
}