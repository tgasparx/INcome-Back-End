import IChangePasswordData from "../modules/companies/models/IChangePasswordData"
import ICompany from "../modules/companies/models/ICompany"
import ICompanyAuthReponse from "../modules/companies/models/ICompanyAuthResponse"
import ICompanyData from "../modules/companies/models/ICompanyData"
import ICompanySummary from "../modules/companies/models/ICompanySummary"
import IEditCompanyData from "../modules/companies/models/IEditCompanyData"
import IListEmployees from "../modules/companies/models/IListEmployees"
import IEditExpenseData from "../modules/expenses/models/IEditExpenseData"
import IExpenseData from "../modules/expenses/models/IExpenseData"
import IListExpense from "../modules/expenses/models/IListExpense"
import IEditOrderData from "../modules/orders/models/IEditOrderData"
import IListOrder from "../modules/orders/models/IListOrder"
import IOrderData from "../modules/orders/models/IOrderData"
import IEditUserData from "../modules/users/models/IEditUserData"
import IUser from "../modules/users/models/IUser"
import IUserAuthResponse from "../modules/users/models/IUserAuthResponse"
import IUserData from "../modules/users/models/IUserData"
import IUserSummary from "../modules/users/models/IUserSummary"
import { Companies } from "./Models/company.entity"


export default interface IDatabase{
    getCompanyIdByToken: (token: string) => Promise<string | "">
    listAllCompanies: () => Promise<Companies[] | false>
    createCompany: (companyData: ICompanyData) => Promise<boolean>
    companyAuth: ({ email, password }) => Promise<ICompanyAuthReponse | false>
    editCompany: ({ name, email, cnpj }: IEditCompanyData, token: string) => Promise<boolean>
    deleteCompany: (token: string, password: string) => Promise<boolean>
    companySummary: (token: string) => Promise<ICompanySummary | false>
    listCompanyEmployees: (token: string) => Promise<IListEmployees | false>
    companyData: (token: string) => Promise<ICompany | false>
    changePassword: ({ password, newPassword }: IChangePasswordData, token: string) => Promise<boolean>

    createExpense: ({ status, value, description }: IExpenseData, token: string) => Promise<boolean>
    editExpense: ({ description, value, status }: IEditExpenseData, expenseId: string, token: string) => Promise<boolean>
    listExpenses: (token: string) => Promise<IListExpense | false>
    deleteExpense: (expenseId: string, token: string) => Promise<boolean>
    createOrder: ({ status, value, description, client, km, driver }: IOrderData, token: string) => Promise<boolean>
    editOrder: ({ description, value, status, driver, km }: IEditOrderData, orderId: string, token: string) => Promise<boolean>
    listOrders: (token: string) => Promise<IListOrder | false>
    deleteOrder: (orderId: string, token: string) => Promise<boolean>

    getUserIdByToken: (token: string) => Promise<string | "">
    listAllUsers: () => Promise<IUser[] | false>
    createUser: ({ name, email, password, cpf }: IUserData, token: string) => Promise<boolean>
    editUser: ({ name, email, password, cpf }: IEditUserData, token: string, userId: string) => Promise<boolean>
    userAuth: ({ email, password }) => Promise<IUserAuthResponse | false>
    userSummary: (token: string) => Promise<IUserSummary | false>
    userData: (token: string) => Promise<IUser | false>
    deleteUser: (token: string, userId: string) => Promise<boolean>
}