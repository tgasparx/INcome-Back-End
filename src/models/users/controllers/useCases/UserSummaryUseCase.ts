
export default class UserSummaryUseCase{
    usersRepository: any
    constructor(usersRepository: any){
        this.usersRepository = usersRepository
    }

   async execute(token: string){
    const summary = await this.usersRepository.userSummary(token)
    return summary
   }
}