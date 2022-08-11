import Database from "../../../database"
import ExpensesRepository from "../repositories/ExpensesRepository"
import CreateExpenseUseCase from "../useCases/CreateExpenseUseCase"
import CreateExpenseController from "./CreateExpenseController"
import ListExpensesController from "./ListExpensesController"

const database = new Database()

const expensesRepository = new ExpensesRepository(database)

const createExpenseUseCase = new CreateExpenseUseCase(expensesRepository)
export const createExpenseController = new CreateExpenseController(createExpenseUseCase)



export const listExpensesController = new ListExpensesController()