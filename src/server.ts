//START IMPORT
import express, {Request, Response} from 'express'
import cors from 'cors'
import { companiesRoutes } from './routes/companies.routes'
import { usersRoutes } from './routes/users.routes'
import { changePasswordController, companyAuthController, companyDataController, companyEditController, companySummaryController, createNewCompanyController, deleteCompanyController, listAllCompaniesController, listCompanyEmployeesController, memorizedAuthCompanyController } from './modules/companies/controllers'
import { myDataSource } from './database/config/app-data-source'
import {Users } from './database/Models/user.entity'
import { Companies } from './database/Models/company.entity'
import { createNewUserController, deleteUserController, listAllUsersController, userAuthController, userDataController, userEditController, userSummaryController } from './modules/users/controllers'
import { createExpenseController, deleteExpenseController, editExpensesController, listExpensesController } from './modules/expenses/controllers'
import CreateExpenseController from './modules/expenses/controllers/CreateExpenseController'
import { createOrderController, deleteOrderController, editOrderController, listOrdersController } from './modules/orders/controllers'
import { ordersRoutes } from './routes/orders.routes'
import { expensesRoutes } from './routes/expenses.routes'
//END IMPORT
//START CONFIG
const app = express()
app.use(cors())
myDataSource
.initialize()
.then(() => {
    console.log("Data Source started")
}).catch((err) => {
    console.log("error", err)
})
const port = 4000
app.use(express.json())
app.use("/companies",companiesRoutes)
app.use("/users", usersRoutes)
app.use("/orders", ordersRoutes)
app.use("/expenses", expensesRoutes)
//END CONFIG
//START ROUTES
         // START COMPANIES
companiesRoutes.get("/list", async function(request: Request, response: Response): Promise<Response> {
    return await listAllCompaniesController.handle(request, response)
})
companiesRoutes.post("/create", async function (request: Request, response: Response): Promise<Response> {
   return await createNewCompanyController.handle(request, response) 
})
companiesRoutes.post("/auth", async function (request: Request, response: Response): Promise<Response> {
    return await companyAuthController.handle(request, response) 
 })
 companiesRoutes.post("/memorizedAuthCompanies/:memorizedToken", async function(request: Request, response: Response): Promise<Response>{
   return await memorizedAuthCompanyController.handle(request, response)
 })
 companiesRoutes.patch("/edit/:token", async function (request: Request, response: Response): Promise<Response>{
    return await companyEditController.handle(request,response)
 })
 companiesRoutes.delete("/delete/:token", async function (request: Request, response: Response): Promise<Response>{
    return await deleteCompanyController.handle(request,response)
 })
companiesRoutes.get("/summary/:token", async function (request: Request, response: Response): Promise<Response>{
    return await companySummaryController.handle(request, response)
})
companiesRoutes.get("/data/:token", async function (request: Request, response: Response): Promise<Response>{
   return await companyDataController.handle(request, response)
})
companiesRoutes.get("/employees/:token", async function (request: Request, response: Response): Promise<Response>{
   return await listCompanyEmployeesController.handle(request,response)
})
companiesRoutes.put("/changePassword/:token", async function(request: Request, response: Response): Promise<Response>{
   return await changePasswordController.handle(request, response)
})
         //END COMPANIES
         // START USERS
 usersRoutes.get("/list", async function (request: Request, response: Response): Promise<Response>{
    return await listAllUsersController.handle(request,response)
 })
 usersRoutes.post("/create/:token", async function(request: Request, response: Response): Promise<Response>{
    return await createNewUserController.handle(request, response)
 })
 usersRoutes.post("/auth", async function(request: Request, response: Response): Promise<Response>{
    return await userAuthController.handle(request,response)
 })
 usersRoutes.post("/memorizedAuthUsers/:memorizedToken", async function(request: Request, response: Response): Promise<Response>{
   return response.send(request.params)
 })
 usersRoutes.patch("/edit/:token/:userId", async function(request: Request, response: Response): Promise<Response>{
    return await userEditController.handle(request,response)
 })
 usersRoutes.delete("/delete/:token/:userId", async function(request: Request, response: Response): Promise<Response>{
    return await deleteUserController.handle(request,response)
 })
 usersRoutes.get("/summary/:token", async function(request: Request, response: Response): Promise<Response>{
    return await userSummaryController.handle(request, response)
 })
 usersRoutes.get("/data/:token", async function (request: Request, response: Response): Promise<Response>{
   return await userDataController.handle(request,response)
 })
         //END USERS
         //START ORDERS
 ordersRoutes.post("/create/:token", async function(request: Request, response: Response): Promise<Response>{
   return await createOrderController.handle(request, response)
 })
 ordersRoutes.get("/list/:token", async function (request: Request, response: Response): Promise<Response>{
   return await listOrdersController.handle(request, response)
 })
 ordersRoutes.patch("/edit/:token", async function(request: Request, response: Response): Promise<Response>{
   return await editOrderController.handle(request, response)
 })
 ordersRoutes.delete("/delete/:orderId/:token", async function (request: Request, response: Response): Promise<Response>{
   return await deleteOrderController.handle(request, response)
 })
         //END ORDERS
         //START EXPENSES
 expensesRoutes.get("/list/:token", async function(request: Request, response: Response): Promise<Response> {
   return await listExpensesController.handle(request,response)
 })
 expensesRoutes.post("/create/:token", async function(request: Request, response: Response): Promise<Response>{
   return await createExpenseController.handle(request, response)
 })
 expensesRoutes.patch("/edit/:expenseId/:token", async function (request: Request, response: Response): Promise<Response>{
   return await editExpensesController.handle(request, response)
 })
 expensesRoutes.delete("/delete/:expenseId/:token", async function(request: Request, response: Response): Promise<Response>{
   return await deleteExpenseController.handle(request,response)
 })
         //END EXPENSES
//END ROUTES



//START CONFIG
app.listen(port, () => console.log(`app running on port ${4000}`))
//END CONFIG