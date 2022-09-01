import IUser from "../models/IUser"
import IUsersRepository from "../repositories/IUsersRepository"
import IListAllUsersUseCase from "./IListAllUsersUseCase"

export default class ListAllUsersUseCase implements IListAllUsersUseCase{
    usersRepository: IUsersRepository
    constructor(usersRepository: IUsersRepository){
        this.usersRepository = usersRepository
    }
    async execute(): Promise<IUser[]>{
        const users = await this.usersRepository.listAllUsers()
        return users
    }
}