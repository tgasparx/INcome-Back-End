export default class ListExpensesUseCase{
    expensesRepository
    constructor(expensesRepository: any){
        this.expensesRepository = expensesRepository
    }
    async execute(token: string){
        const list = await this.expensesRepository.listExpenses(token)
        return list
    }
}