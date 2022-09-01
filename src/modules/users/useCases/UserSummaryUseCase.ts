import IUserSummary from "../models/IUserSummary"
import IUsersRepository from "../repositories/IUsersRepository"
import IUserSummaryUseCase from "./IUserSummaryUserCase"

export default class UserSummaryUseCase implements IUserSummaryUseCase{
    usersRepository: IUsersRepository
    constructor(usersRepository: IUsersRepository){
        this.usersRepository = usersRepository
    }

   async execute(token: string): Promise<IUserSummary | boolean>{
    const summary = await this.usersRepository.userSummary(token)
    return summary
   }
}