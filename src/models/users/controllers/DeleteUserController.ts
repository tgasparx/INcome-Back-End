export default class DeleteUserController{
    deleteUserUseCase: any
    constructor(deleteUserUseCase: any){
        this.deleteUserUseCase = deleteUserUseCase
    }
    async handle(request, response){
        const {token, userId} = request.params
        const deleted = await this.deleteUserUseCase.execute(token, userId)
        return response.json(deleted)
    }
}