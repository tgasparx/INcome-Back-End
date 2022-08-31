import { CompanyAuth } from "../../../database/Models/companyAuth.entity"
import { Users } from "../../../database/Models/user.entity"
import ICompany from "./ICompany"



export default class Company implements ICompany{
    id: string
    name: string
    email: string
    password: string
    cnpj: string
    created_at: Date
    updated_at: Date
    auth: CompanyAuth
    users: Users[]
}