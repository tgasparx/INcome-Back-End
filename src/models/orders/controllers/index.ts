import Database from "../../../database";
import OrdersRepository from "../repositories/OrdersRepository";
import CreateOrderUseCase from "../useCases/CreateOrderUseCase";
import EditOrderUseCase from "../useCases/EditOrderUseCase";
import ListOrdersUseCase from "../useCases/ListOrdersUseCase";
import CreateOrderController from "./CreateOrderController";
import EditOrderController from "./EditOrderController";
import ListOrdersController from "./ListOrdersController";

const database = new Database()
const ordersRepository = new OrdersRepository(database)

const createOrderUseCase = new CreateOrderUseCase(ordersRepository)
export const createOrderController = new CreateOrderController(createOrderUseCase)

const listOrdersUseCase = new ListOrdersUseCase(ordersRepository)
export const listOrdersController = new ListOrdersController(listOrdersUseCase)

 const editOrderUseCase = new EditOrderUseCase(ordersRepository)
 export const editOrderController = new EditOrderController(editOrderUseCase)