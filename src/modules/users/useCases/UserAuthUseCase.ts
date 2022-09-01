import IUserAuthData from "../models/IUserAuthData"
import IUserAuthResponse from "../models/IUserAuthResponse"
import IUsersRepository from "../repositories/IUsersRepository"
import IUserAuthUseCase from "./IUserAuthUseCase"


export default class UserAuthUseCase implements IUserAuthUseCase{
    usersRepository: IUsersRepository
    constructor(usersRepository: IUsersRepository){
this.usersRepository = usersRepository
    }
async execute({email, password}: IUserAuthData): Promise<IUserAuthResponse | boolean>{
    const auth = await this.usersRepository.userAuth({email, password})
    return auth
}
}