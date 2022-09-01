import IUser from "../models/IUser";
import IUsersRepository from "../repositories/IUsersRepository";
import IUserDataUseCase from "./IUserDataUseCase";


export default class UserDataUseCase implements IUserDataUseCase{
    usersRepository: IUsersRepository
    constructor(usersRepository: IUsersRepository){
        this.usersRepository = usersRepository
    }
    async execute(token: string): Promise<IUser | boolean>{
        const userData: IUser | boolean = await this.usersRepository.userData(token)
        return userData
    }
}