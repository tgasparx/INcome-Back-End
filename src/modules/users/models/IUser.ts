import { UserAuth } from "../../../database/Models/UserAuth.entity"


export default interface IUser{
    id: string
    name: string
    email: string
    cpf: string
    password: string
    created_at: string
    updated_at: string
    auth: UserAuth
    company: string
}