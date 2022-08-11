

export default class CreateNewUserController{
    createNewUserUseCase: any
    constructor(createNewUserUseCase){
        this.createNewUserUseCase = createNewUserUseCase
    }
    
    async handle(request, response){
        const {name, email, password, cpf} = request.body
        const {token} = request.params
        const newUser = await this.createNewUserUseCase.execute({name, email, password, cpf}, token)
        return response.json(newUser)
    }
}