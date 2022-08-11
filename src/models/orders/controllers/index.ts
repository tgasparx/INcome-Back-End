import Database from "../../../database";
import OrdersRepository from "../repositories/OrdersRepository";
import CreateOrderUseCase from "../useCases/CreateOrderUseCase";
import CreateOrderController from "./CreateOrderController";

const database = new Database()
const ordersRepository = new OrdersRepository(database)

const createOrderUseCase = new CreateOrderUseCase(ordersRepository)
export const createOrderController = new CreateOrderController(createOrderUseCase)