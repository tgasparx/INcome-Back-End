

export default class UserEditController{
    userEditUseCase: any
    constructor(userEditUseCase: any){
        this.userEditUseCase = userEditUseCase
    }

    async handle(request,response){
        const {token, userId} = request.params
        const {name, email, password, cpf} = request.body
        const edited = await this.userEditUseCase.execute({name, email, password, cpf}, token, userId)
        return response.json(edited)
    }
}