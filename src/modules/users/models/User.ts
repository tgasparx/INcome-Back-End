import { UserAuth } from "../../../database/Models/UserAuth.entity"
import IUser from "./IUser"


export default class User implements IUser{
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