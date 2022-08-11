

export default class CreateNewUserUseCase{
    usersRepository: any
    constructor(usersRepository){
        this.usersRepository = usersRepository
    }

    async execute({name, email, password, cpf}: any, token: string){
        const created = await this.usersRepository.createUser({name, email, password, cpf}, token)
        return created
    }
}