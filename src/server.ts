//START IMPORT
import express from 'express'
import cors from 'cors'
import { companiesRoutes } from './routes/companies.routes'
import { usersRoutes } from './routes/users.routes'
import { changePasswordController, companyAuthController, companyDataController, companyEditController, companySummaryController, createNewCompanyController, deleteCompanyController, listAllCompaniesController, listCompanyEmployeesController } from './models/companies/controllers'
import { myDataSource } from './database/config/app-data-source'
import {Users } from './database/Models/user.entity'
import { Companies } from './database/Models/company.entity'
import { createNewUserController, deleteUserController, listAllUsersController, userAuthController, userDataController, userEditController, userSummaryController } from './models/users/controllers'
import { createExpenseController, listExpensesController } from './models/expenses/controllers'
import CreateExpenseController from './models/expenses/controllers/CreateExpenseController'
import { createOrderController } from './models/orders/controllers'
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



//END CONFIG
//START ROUTES
companiesRoutes.get("/list", async function(request, response) {
    return await listAllCompaniesController.handle(request, response)
})
companiesRoutes.post("/create", async function (request, response) {
   return await createNewCompanyController.handle(request, response) 
})
companiesRoutes.post("/auth", async function (request, response) {
    return await companyAuthController.handle(request, response) 
 })
 companiesRoutes.post("/memorizedAuth/:token", async function(request, response){
   return response.send(request.params)
 })
 companiesRoutes.patch("/edit/:token", async function (request, response){
    return await companyEditController.handle(request,response)
 })
 companiesRoutes.delete("/delete/:token", async function (request, response){
    return await deleteCompanyController.handle(request,response)
 })
companiesRoutes.get("/summary/:token", async function (request, response){
    return await companySummaryController.handle(request, response)
})
companiesRoutes.get("/data/:token", async function (request, response){
   return await companyDataController.handle(request, response)
})
companiesRoutes.get("/employees/:token", async function (request, response){
   return await listCompanyEmployeesController.handle(request,response)
})
// companiesRoutes.get("/expenses/list/:token", async function(request, response){
//    return await listExpensesController.handle(request, response)
// })
companiesRoutes.post("/expenses/create/:token", async function (request, response){
   return await createExpenseController.handle(request,response)
})
companiesRoutes.post("/orders/create/:token", async function(request, response){
   return await createOrderController.handle(request, response)
})

companiesRoutes.put("/changePassword/:token", async function(request, response){
   return await changePasswordController.handle(request, response)
})





 usersRoutes.get("/list", async function (request, response){
    return await listAllUsersController.handle(request,response)
 })
 usersRoutes.post("/create/:token", async function(request, response){
    return await createNewUserController.handle(request, response)
   // return response.json({body: request.body, params: request.params})
 })
 usersRoutes.post("/auth", async function(request, response){
    return await userAuthController.handle(request,response)
 })
 usersRoutes.post("/memorizedAuth/:token", async function( request, response){
   return response.send(request.params)
 })
 usersRoutes.patch("/edit/:token/:userId", async function(request, response){
    return await userEditController.handle(request,response)
 })
 usersRoutes.delete("/delete/:token/:userId", async function(request, response){
    return await deleteUserController.handle(request,response)
 })
 usersRoutes.get("/summary/:token", async function(request, response){
    return await userSummaryController.handle(request, response)
 })
 usersRoutes.get("/data/:token", async function (request, response){
   return await userDataController.handle(request,response)
 })
//END ROUTES

//START CONFIG
app.listen(port, () => console.log(`app running on port ${4000}`))
//END CONFIG