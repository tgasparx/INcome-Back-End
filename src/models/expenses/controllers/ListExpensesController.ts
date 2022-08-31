

export default class ListExpensesController{
    listExpensesUseCase
    constructor(listExpensesUseCase: any){
        this.listExpensesUseCase = listExpensesUseCase
    }

    async handle(request, response){
        const {token} = request.params
        const list = await this.listExpensesUseCase.execute(token)
        return response.json(list)
    }
}