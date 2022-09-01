import ICompany from "../models/companies/models/ICompany"
import ICompanyAuthReponse from "../models/companies/models/ICompanyAuthResponse"
import ICompanyData from "../models/companies/models/ICompanyData"
import ICompanySummary from "../models/companies/models/ICompanySummary"
import IEditCompanyData from "../models/companies/models/IEditCompanyData"
import IListEmployees from "../models/companies/models/IListEmployees"
import IListExpense from "../models/expenses/models/IListExpense"
import IListOrder from "../models/orders/models/IListOrder"
import IUser from "../models/users/models/IUser"
import IUserAuthResponse from "../models/users/models/IUserAuthResponse"
import IUserData from "../models/users/models/IUserData"
import IUserSummary from "../models/users/models/IUserSummary"
import { Companies } from "./Models/company.entity"


export default interface IDatabase{
    getCompanyIdByToken: (token: string) => Promise<string>
    listAllCompanies: () => Promise<Companies[] | boolean>
    createCompany: (companyData: ICompanyData) => Promise<boolean>
    companyAuth: ({ email, password }) => Promise<ICompanyAuthReponse | false>
    editCompany: ({ name, email, cnpj }: IEditCompanyData, token: any) => Promise<boolean>
    deleteCompany: (token: string, password: string) => Promise<boolean>
    companySummary: (token: string) => Promise<ICompanySummary | boolean>
    listCompanyEmployees: (token: string) => Promise<IListEmployees | boolean>
    companyData: (token: string) => Promise<ICompany>
    changePassword: ({ password, newPassword }: any, token: string) => Promise<boolean>

    createExpense: ({ status, value, description }: any, token: string) => Promise<boolean>
    editExpense: ({ description, value, status }: any, expenseId: string, token: string) => Promise<boolean>
    listExpenses: (token: string) => Promise<IListExpense>
    deleteExpense: (expenseId: string, token: string) => Promise<boolean>
    createOrder: ({ status, value, description, client, km, driver }: any, token: string) => Promise<boolean>
    editOrder: ({ description, value, status, driver, km }: any, orderId: string, token: string) => Promise<boolean>
    listOrders: (token: string) => Promise<IListOrder | boolean>
    deleteOrder: (orderId: string, token: string) => Promise<boolean>

    getUserIdByToken: (token: string) => Promise<string>
    listAllUsers: () => Promise<IUser[]>
    createUser: ({ name, email, password, cpf }: IUserData, token: string) => Promise<boolean>
    editUser: ({ name, email, password, cpf }: any, token: string, userId: string) => Promise<boolean>
    userAuth: ({ email, password }) => Promise<IUserAuthResponse | boolean>
    userSummary: (token: string) => Promise<IUserSummary>
    deleteUser: (token: string, userId: string) => Promise<boolean>
}