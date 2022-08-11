export default class UserAuthController{
    userAuthUseCase: any
constructor(userAuthUseCase: any){
    this.userAuthUseCase = userAuthUseCase
}

    async handle(request, response){
        const {email, password} = request.body
        const auth = await this.userAuthUseCase.execute({email, password})
        return response.json(auth)
    }
}