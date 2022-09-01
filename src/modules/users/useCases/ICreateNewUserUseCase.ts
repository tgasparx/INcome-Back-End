import IUserData from "../models/IUserData";
import IUsersRepository from "../repositories/IUsersRepository";



export default interface ICreateNewUserUseCase{
    usersRepository: IUsersRepository
    execute: ({name, email, password, cpf}: IUserData, token: string) => Promise<boolean>
}