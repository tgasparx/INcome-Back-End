import Database from "../../../database";
import IDatabase from "../../../database/IDatabase";
import IOrdersRepository from "../repositories/IOrdersRepository";
import OrdersRepository from "../repositories/OrdersRepository";
import CreateOrderUseCase from "../useCases/CreateOrderUseCase";
import DeleteOrderUseCase from "../useCases/DeleteOrderUseCase";
import EditOrderUseCase from "../useCases/EditOrderUseCase";
import ICreateOrderUseCase from "../useCases/ICreateOrderUseCase";
import IDeleteOrderUseCase from "../useCases/IDeleteOrderUseCase";
import IEditOrderUseCase from "../useCases/IEditOrderUseCase";
import IListOrdersUseCase from "../useCases/IListOrderUseCase";
import ListOrdersUseCase from "../useCases/ListOrdersUseCase";
import CreateOrderController from "./CreateOrderController";
import DeleteOrderController from "./DeleteOrderController";
import EditOrderController from "./EditOrderController";
import ICreateOrderController from "./ICreateOrderController";
import IDeleteOrderController from "./IDeleteOrderController";
import IEditOrderController from "./IEditOrderController";
import IListOrdersController from "./IListOrderController";
import ListOrdersController from "./ListOrdersController";

const database: IDatabase = new Database()
const ordersRepository: IOrdersRepository = new OrdersRepository(database)

const createOrderUseCase: ICreateOrderUseCase = new CreateOrderUseCase(ordersRepository)
export const createOrderController: ICreateOrderController = new CreateOrderController(createOrderUseCase)

const listOrdersUseCase: IListOrdersUseCase = new ListOrdersUseCase(ordersRepository)
export const listOrdersController: IListOrdersController = new ListOrdersController(listOrdersUseCase)

 const editOrderUseCase: IEditOrderUseCase = new EditOrderUseCase(ordersRepository)
 export const editOrderController: IEditOrderController = new EditOrderController(editOrderUseCase)

const deleteOrderUseCase: IDeleteOrderUseCase = new DeleteOrderUseCase(ordersRepository)
 export const deleteOrderController: IDeleteOrderController = new DeleteOrderController(deleteOrderUseCase)