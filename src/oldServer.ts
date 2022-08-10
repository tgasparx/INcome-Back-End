//START IMPORT
import express from 'express'
import cors from 'cors'
import { companiesRoutes } from './routes/companies.routes'
import { usersRoutes } from './routes/users.routes'
import { createNewCompanyController } from './models/companies/controllers'
import { myDataSource } from './database/config/app-data-source'
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
///////////////////////////////////////////////////////////////START COMPANIES
companiesRoutes.post("/companiesCreate", (request, response)=> {
    const created = createNewCompanyController.handle()
    return response.send("Ok")
})
companiesRoutes.post("/companiesAuth", (request, response)=> {
    const {name, description} = request.body
    console.log(name, description)
    return response.send("Ok")
})
companiesRoutes.patch("/companiesEdit", (request, response)=> {
    const {name, description} = request.body
    console.log(name, description)
    return response.send("Ok")
})
companiesRoutes.delete("/companiesDelete", (request, response)=> {
    const {name, description} = request.body
    console.log(name, description)
    return response.send("Ok")
})
///////////////////////////////////////////////////////////////END COMPANIES
///////////////////////////////////////////////////////////////START USERS
companiesRoutes.post("/usersAuth", (request, response)=> {
    // console.log(request)
    const {name, description} = request.body
    console.log(name, description)
    return response.send("Ok")
})
companiesRoutes.post("/usersCreate", (request, response)=> {
    // console.log(request)
    const {name, description} = request.body
    console.log(name, description)
    return response.send("Ok")
})
companiesRoutes.post("/usersEdit", (request, response)=> {
    // console.log(request)
    const {name, description} = request.body
    console.log(name, description)
    return response.send("Ok")
})
companiesRoutes.post("/usersDelete", (request, response)=> {
    // console.log(request)
    const {name, description} = request.body
    console.log(name, description)
    return response.send("Ok")
})
///////////////////////////////////////////////////////////////END USERS

//START CONFIG
app.listen(port, () => console.log(`app running on port ${4000}`))
//END CONFIG