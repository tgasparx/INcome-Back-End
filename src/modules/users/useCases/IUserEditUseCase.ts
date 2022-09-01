import IUserData from "../models/IUserData"
import IUserSummary from "../models/IUserSummary"
import IUsersRepository from "../repositories/IUsersRepository"


export default interface IUserEditUseCase{
    usersRepository: IUsersRepository
    execute: ({name, email, password, cpf}: IUserData, token: any, userId: any) => Promise<IUserSummary | boolean>
}