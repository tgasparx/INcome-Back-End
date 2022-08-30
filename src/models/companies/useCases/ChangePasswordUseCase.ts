


export default class ChangePasswordUseCase{
    companiesRepository: any
    constructor(companiesRepository: any){
        this.companiesRepository = companiesRepository
    }

    async execute({password, newPassword}: any, token: string): Promise<boolean>{
        const changed = await this.companiesRepository.changePassword({password, newPassword}, token)
        return changed
    }
}