import Database from "../../../database"
import IDatabase from "../../../database/IDatabase"
import ExpensesRepository from "../repositories/ExpensesRepository"
import IExpensesRepository from "../repositories/IExpensesRepository"
import CreateExpenseUseCase from "../useCases/CreateExpenseUseCase"
import DeleteExpenseUseCase from "../useCases/DeleteExpenseUseCase"
import EditExpensesUseCase from "../useCases/EditExpenseUseCase"
import ICreateExpenseUseCase from "../useCases/ICreateExpenseUseCase"
import IDeleteExpenseUseCase from "../useCases/IDeleteExpenseUseCase"
import IEditExpenseUseCase from "../useCases/IEditExpenseUseCase"
import IListExpensesUsecase from "../useCases/IListExpensesUseCase"
import ListExpensesUseCase from "../useCases/ListExpensesUseCase"
import CreateExpenseController from "./CreateExpenseController"
import DeleteExpenseController from "./DeleteExpenseController"
import EditExpensesController from "./EditExpensesController"
import ICreateExpenseController from "./ICreateExpenseController"
import IDeleteExpenseController from "./IDeleteExpenseController"
import IEditExpensesController from "./IEditExpensesController"
import IListExpensesController from "./IListExpensesController"
import ListExpensesController from "./ListExpensesController"

const database: IDatabase = new Database()

const expensesRepository: IExpensesRepository = new ExpensesRepository(database)

const createExpenseUseCase: ICreateExpenseUseCase = new CreateExpenseUseCase(expensesRepository)
export const createExpenseController: ICreateExpenseController = new CreateExpenseController(createExpenseUseCase)

const listExpensesUseCase: IListExpensesUsecase = new ListExpensesUseCase(expensesRepository)
export const listExpensesController: IListExpensesController = new ListExpensesController(listExpensesUseCase)

const editExpensesUseCase: IEditExpenseUseCase = new EditExpensesUseCase(expensesRepository)
export const editExpensesController: IEditExpensesController = new EditExpensesController(editExpensesUseCase)

const deleteExpenseUseCase: IDeleteExpenseUseCase = new DeleteExpenseUseCase(expensesRepository)
export const deleteExpenseController: IDeleteExpenseController = new DeleteExpenseController(deleteExpenseUseCase)