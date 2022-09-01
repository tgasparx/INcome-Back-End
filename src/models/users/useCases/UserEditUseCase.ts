import IUserData from "../models/IUserData"
import IUserSummary from "../models/IUserSummary"
import IUsersRepository from "../repositories/IUsersRepository"
import IUserEditUseCase from "./IUserEditUseCase"


export default class UserEditUseCase implements IUserEditUseCase{
    usersRepository: IUsersRepository
    constructor(usersRepository: IUsersRepository){
        this.usersRepository = usersRepository
    }
    async execute({name, email, password, cpf}: IUserData, token: any, userId: any): Promise<IUserSummary | boolean>{
        const edited = await this.usersRepository.editUser({name, email, password, cpf}, token, userId)
    return edited
    }
}