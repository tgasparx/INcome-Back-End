export default class CompanySummaryUseCase{
    companiesRepository: any
    constructor(companiesRepository){
        this.companiesRepository = companiesRepository
    }
    async execute(token: string){
        const summary = await this.companiesRepository.companySummary(token)
        return summary

    }
}