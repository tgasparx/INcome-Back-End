

export default class UserAuthUseCase{
    usersRepository: any
    constructor(usersRepository: any){
this.usersRepository = usersRepository
    }
async execute({email, password}){
    const auth = await this.usersRepository.userAuth({email, password})
    return auth
}
}