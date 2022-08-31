

export default class EditExpensesController{
    editExpensesUseCase
    constructor(editExpensesUseCase: any){
        this.editExpensesUseCase = editExpensesUseCase
    }
    async handle(request, response){
        const {description, value, status, expenseId} = request.body
        const {token} = request.params
        const edited = await this.editExpensesUseCase.execute({description, value, status}, expenseId, token)
        return response.json(edited)
    }
}