export default class DeleteUserUseCase{
    usersRepository: any
    constructor(usersRepository){
this.usersRepository = usersRepository
    }
    async execute(token, userId){
        const deleted = await this.usersRepository.deleteUser(token, userId)
    return deleted
    }
}