//START IMPORT
import express from 'express'
import cors from 'cors'
import { companiesRoutes } from './routes/companies.routes'
import { usersRoutes } from './routes/users.routes'
import { companyAuthController, companyEditController, companySummaryController, createNewCompanyController, deleteCompanyController, listAllCompaniesController } from './models/companies/controllers'
import { myDataSource } from './database/config/app-data-source'
import {Users } from './database/Models/user.entity'
import { Companies } from './database/Models/company.entity'
import { createNewUserController, deleteUserController, listAllUsersController, userAuthController, userEditController, userSummaryController } from './models/users/controllers'
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
 companiesRoutes.patch("/edit/:token", async function (request, response){
    return await companyEditController.handle(request,response)
 })
 companiesRoutes.delete("/delete/:token", async function (request, response){
    return await deleteCompanyController.handle(request,response)
 })
companiesRoutes.get("/summary/:token", async function (request, response){
    return await companySummaryController.handle(request, response)
    
})
 usersRoutes.get("/list", async function (request, response){
    return await listAllUsersController.handle(request,response)
 })
 usersRoutes.post("/create", async function(request, response){
    return await createNewUserController.handle(request, response)
 })
 usersRoutes.post("/auth", async function(request, response){
    return await userAuthController.handle(request,response)
 })
 usersRoutes.patch("/edit/:token", async function(request, response){
    return await userEditController.handle(request,response)
 })
 usersRoutes.delete("/delete/:token", async function(request, response){
    return await deleteUserController.handle(request,response)
 })
 usersRoutes.get("/summary/:token", async function(request, response){
    return await userSummaryController.handle(request, response)
 })
//END ROUTES

//START CONFIG
app.listen(port, () => console.log(`app running on port ${4000}`))
//END CONFIG