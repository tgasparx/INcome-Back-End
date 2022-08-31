import { CompanyAuth } from "../../../database/Models/companyAuth.entity"
import { Users } from "../../../database/Models/user.entity"


export default interface ICompany{
    id: string
    name: string
    email: string
    password: string
    cnpj: string
    created_at: string
    updated_at: Date
    auth: CompanyAuth
    users: Users[]
}