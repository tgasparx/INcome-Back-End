

export default class OrdersRepository{
    database: any
    constructor(database: any){
        this.database = database
    }


async createOrder({status, value, description, client, km, driver}: any, token: string){
 const created = await this.database.createOrder({status, value, description, client, km, driver}, token)
 return created
}
async editOrder({description, value, status, driver, km}: any, orderId: string, token: string){
    const edited = await this.database.editOrder({description, value, status, driver, km}, orderId, token)
    return edited
}
}