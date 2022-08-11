

export default class CreateExpenseController{
    createExpenseUseCase: any
    constructor(createExpenseUseCase){
this.createExpenseUseCase = createExpenseUseCase
    }
    async handle(request, response){
        const {token} = request.params
        const {status, value, description} = request.body
        const created = await this.createExpenseUseCase.execute({status, value, description}, token)
        return response.json(created)
    }
}