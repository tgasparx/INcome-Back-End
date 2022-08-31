import { response } from "express"


export default class EditOrderController{
    editOrderUseCase
    constructor(editOrderUseCase: any){
        this.editOrderUseCase = editOrderUseCase
    }
    async handle(request, response){
        const {description, value, status, driver,km , orderId} = request.body
   const {token} = request.params
   console.log(description,value,status,driver,km,orderId, token)
   console.log("bateu")
        const edited = await this.editOrderUseCase.execute({description, value, status, driver,km },orderId, token)
        return response.json(edited)
    }
}