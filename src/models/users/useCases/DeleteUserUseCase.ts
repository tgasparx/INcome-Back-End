import IUsersRepository from "../repositories/IUsersRepository"
import IDeleteUserUseCase from "./IDeleteUserUseCase"

export default class DeleteUserUseCase implements IDeleteUserUseCase{
    usersRepository: IUsersRepository
    constructor(usersRepository: IUsersRepository){
this.usersRepository = usersRepository
    }
    async execute(token: string, userId: string): Promise<boolean>{
        const deleted = await this.usersRepository.deleteUser(token, userId)
    return deleted
    }
}