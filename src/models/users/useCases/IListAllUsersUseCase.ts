import IUser from "../models/IUser"
import IUsersRepository from "../repositories/IUsersRepository"


export default interface IListAllUsersUseCase{
    usersRepository: IUsersRepository
    execute: () => Promise<IUser[]>
}