import IOrdersRepository from "../repositories/IOrdersRepository";



export default interface IDeleteOrderUseCase{
    ordersRepository: IOrdersRepository
    execute: (orderId: string, token: string) => Promise<boolean>
}