import Database from "../../../database";


export default interface IOrdersRepository{
    database: Database
    createOrder: ({status, value, description})
    editOrder
    listOrders
    deleteOrder
}


// FAZER IORDERDATA.ts (interface)