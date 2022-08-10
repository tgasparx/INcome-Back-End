import { Request, Response } from "express"



export default class ListAllCompaniesController {
    listAllCompaniesUseCase: any
    constructor(listAllCompaniesUseCase: any) {
        this.listAllCompaniesUseCase = listAllCompaniesUseCase
    }

    async handle(request: Request, response: Response) {
        const created = await this.listAllCompaniesUseCase.execute()
        // const finalResultsListAllCompanies = {page: 1, perPage: 10,total_pages: 1, total_records: created.length, records: created}
        return response.json(created)
    }
}