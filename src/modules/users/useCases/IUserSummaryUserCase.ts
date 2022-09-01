import IUserSummary from "../models/IUserSummary"
import IUsersRepository from "../repositories/IUsersRepository"



export default interface IUserSummaryUseCase{
    usersRepository: IUsersRepository
    execute: (token: string) => Promise<IUserSummary | boolean>
}