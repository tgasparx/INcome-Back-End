import { Request, Response } from "express"
import ICreateExpenseUseCase from "../useCases/ICreateExpenseUseCase"
import ICreateExpenseController from "./ICreateExpenseController"


export default class CreateExpenseController implements ICreateExpenseController{
    createExpenseUseCase: ICreateExpenseUseCase
    constructor(createExpenseUseCase: ICreateExpenseUseCase){
this.createExpenseUseCase = createExpenseUseCase
    }
    async handle(request: Request, response: Response): Promise<Response>{
        const {token} = request.params
        const {status, value, description} = request.body
        const created = await this.createExpenseUseCase.execute({status, value, description}, token)
        if(created){
            response.status(201)
            return response.send("Despesa criada com sucesso")
        }else{
            response.status(406)
            return response.send("Houve um erro interno")
        }
    }
}