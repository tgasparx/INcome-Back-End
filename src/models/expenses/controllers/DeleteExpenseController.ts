export default class DeleteExpenseController{
    deleteExpenseUseCase: any
    constructor(deleteExpenseUseCase: any){
        this.deleteExpenseUseCase = deleteExpenseUseCase
    }
    async handle(request, response){
        const {expenseId} = request.body
        const {token} = request.params
        const deleted = await this.deleteExpenseUseCase.execute(expenseId, token)
        return response.json(deleted)
    }
}