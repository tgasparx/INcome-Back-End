

export default class OrdersRepository{
    database: any
    constructor(database: any){
        this.database = database
    }


async createOrder({status, value}: any, token: string){
 const created = await this.database.createOrder({status, value}, token)
 return created
}
}