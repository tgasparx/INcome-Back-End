

export default class ChangePasswordController{
    changePasswordUseCase: any
    constructor(changePasswordUseCase: any){
        this.changePasswordUseCase = changePasswordUseCase
    }
    async handle(request, response){
        const {password, newPassword} = request.body
        const {token} = request.params
        const changed = await this.changePasswordUseCase.execute({password, newPassword}, token)
        if(changed){
            response.status(202)
            return response.json({message: "Senha alterada", status: "202"})
        }else{
            response.status(406)
            throw new Error("Senha Incorreta")
        }
        
    }
}