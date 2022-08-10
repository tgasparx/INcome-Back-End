

export default class CompanySummaryController{
    companySummaryUseCase: any
    constructor(companySummaryUseCase){
this.companySummaryUseCase = companySummaryUseCase
    }
    async handle(request, response){
        const {token} = request.params
        const summary = await this.companySummaryUseCase.execute(token)
        return response.json(summary) 
    }
}