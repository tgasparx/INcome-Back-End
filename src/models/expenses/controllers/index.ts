import Database from "../../../database"
import ExpensesRepository from "../repositories/ExpensesRepository"
import CreateExpenseUseCase from "../useCases/CreateExpenseUseCase"
import DeleteExpenseUseCase from "../useCases/DeleteExpenseUseCase"
import EditExpensesUseCase from "../useCases/EditExpensesUseCase"
import ListExpensesUseCase from "../useCases/ListExpensesUseCase"
import CreateExpenseController from "./CreateExpenseController"
import DeleteExpenseController from "./DeleteExpenseController"
import EditExpensesController from "./EditExpensesController"
import ListExpensesController from "./ListExpensesController"

const database = new Database()

const expensesRepository = new ExpensesRepository(database)

const createExpenseUseCase = new CreateExpenseUseCase(expensesRepository)
export const createExpenseController = new CreateExpenseController(createExpenseUseCase)


const listExpensesUseCase = new ListExpensesUseCase(expensesRepository)
export const listExpensesController = new ListExpensesController(listExpensesUseCase)

const editExpensesUseCase = new EditExpensesUseCase(expensesRepository)
export const editExpensesController = new EditExpensesController(editExpensesUseCase)

const deleteExpenseUseCase = new DeleteExpenseUseCase(expensesRepository)
export const deleteExpenseController = new DeleteExpenseController(deleteExpenseUseCase)