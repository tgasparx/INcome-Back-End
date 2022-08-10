export default class UserSummaryController{
    userSummaryUseCase: any
    constructor(userSummaryUseCase){
        this.userSummaryUseCase = userSummaryUseCase
    }
    async handle(request, response){
        const {token} = request.params
        const summary = await this.userSummaryUseCase.execute(token)
        return response.json(summary)
    }
}