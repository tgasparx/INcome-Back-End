import IUsersRepository from "../repositories/IUsersRepository"



export default interface IDeleteUserUseCase{
    usersRepository: IUsersRepository
    execute: (token: string, userId: string) => Promise<boolean>
}