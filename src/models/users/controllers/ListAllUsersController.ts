export default class ListAllUsersController{
    listAllUsersUseCase: any
    constructor(listAllUsersUseCase: any){
        this.listAllUsersUseCase = listAllUsersUseCase
    }
    async handle(request, response){
        const users = await this.listAllUsersUseCase.execute()
        return response.json(users)
    }
}