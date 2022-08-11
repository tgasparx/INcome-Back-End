export default class ListAllUsersUseCase{
    usersRepository: any
    constructor(usersRepository: any){
        this.usersRepository = usersRepository
    }
    async execute(){
        const users = await this.usersRepository.listAllUsers()
        return users
    }
}