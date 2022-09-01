import IUserData from "../models/IUserData"
import IUsersRepository from "../repositories/IUsersRepository"
import ICreateNewUserUseCase from "./ICreateNewUserUseCase"


export default class CreateNewUserUseCase implements ICreateNewUserUseCase{
    usersRepository: IUsersRepository
    constructor(usersRepository: IUsersRepository){
        this.usersRepository = usersRepository
    }

    async execute({name, email, password, cpf}: IUserData, token: string): Promise<boolean>{
        const created = await this.usersRepository.createUser({name, email, password, cpf}, token)
        return created
    }
}