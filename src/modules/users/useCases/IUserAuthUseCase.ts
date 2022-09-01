import IUserAuthData from "../models/IUserAuthData";
import IUserAuthResponse from "../models/IUserAuthResponse";
import IUsersRepository from "../repositories/IUsersRepository";



export default interface IUserAuthUseCase{
    usersRepository: IUsersRepository
    execute: ({}: IUserAuthData) => Promise<IUserAuthResponse | boolean>
}