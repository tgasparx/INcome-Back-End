

export default class UserEditUseCase{
    usersRepository: any
    constructor(usersRepository){
        this.usersRepository = usersRepository
    }
    async execute({name, email, password, cpf}: any, token: any, userId: any){
        const edited = await this.usersRepository.editUser({name, email, password, cpf}, token, userId)
    return edited
    }
}