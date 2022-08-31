import { myDataSource } from "./config/app-data-source";
import { Users } from "./Models/user.entity";
import { Companies } from "./Models/company.entity";
import { UserAuth } from "./Models/UserAuth.entity";
import { CompanyAuth } from "./Models/companyAuth.entity";
import jwt from 'jsonwebtoken'
import { Like } from "typeorm";
import { compare, hash } from 'bcrypt'
import { Order } from "./Models/order.entity";
import { Expense } from "./Models/expense.entity";
import ICompanyData from "../models/companies/models/ICompanyData";
import ICompanyAuthReponse from "../models/companies/models/ICompanyAuthResponse";
import IEditCompanyData from "../models/companies/models/IEditCompanyData";
import IUserData from "../models/users/models/IUserData";
import IUser from "../models/users/models/IUser";
import IUserAuthResponse from "../models/users/models/IUserAuthResponse";
import IUserSummary from "../models/users/models/IUserSummary";
import IListExpense from "../models/expenses/models/IListExpense";
import IListOrder from "../models/orders/models/IListOrder";
import ICompany from "../models/companies/models/ICompany";
import IListEmployees from "../models/companies/models/IListEmployees";
import ICompanySummary from "../models/companies/models/ICompanySummary";


export default class Database {
  constructor() {
  }


  // START COMPANIES
  async getCompanyIdByToken(token: string): Promise<string> {
    try {
      const referedCompanyIdByToken = await myDataSource.getRepository(CompanyAuth).findBy({ token: Like(`${token}`) })
      console.log("loggedCompanyId", referedCompanyIdByToken)
      if (referedCompanyIdByToken.length !== 0) {
       const companyId = referedCompanyIdByToken[0].company
        return companyId
      } else {
        return ""
      }
    } catch (error) {
      console.log(error)
      return ""
    }
  }
  async listAllCompanies(): Promise<Companies[] | boolean> {
    try {
      const companies = await myDataSource
        .getRepository(Companies).find()

      return companies

    } catch (error) {
      console.log(error)
      return false
    }
  }
  async createCompany(companyData: ICompanyData): Promise<boolean> {
    try {
      const isCompanyEmailAlreadyExists = await myDataSource
        .getRepository(Companies).findBy({ cnpj: Like(`${companyData.company_cnpj}`) })
      const isCompanyCNPJAlreadyExists = await myDataSource
        .getRepository(Companies).findBy({ email: Like(`${companyData.company_email}`) })
      if (!isCompanyEmailAlreadyExists[0] && !isCompanyCNPJAlreadyExists[0]) {// SE COMPANHIA NÃO EXISTIR NO BANCO DE DADOS
        const hashedPassword = await hash(companyData.company_password, 10)
        const IsOkompanyData = {
          id: `${(Math.random() * (Math.random()) * 1000)}`,
          name: companyData.company_name,
          email: companyData.company_email,
          password: hashedPassword,
          cnpj: companyData.company_cnpj
        }

        const create = await myDataSource.getRepository(Companies).create(IsOkompanyData)
        const created = await myDataSource.getRepository(Companies).save(create)
        return true

      } else { // SE O EMAIL OU CNPJ INFORMADO JÁ EXISTIREM IRÁ RETORNAR FALSE
        return false
      }
    } catch (error) {
      console.log(error)
      return false
    }

  }
  async companyAuth({ email, password }): Promise<ICompanyAuthReponse | false> {
    try {
      const referedCompany = await myDataSource
        .getRepository(Companies).findBy({ email: Like(`${email}`) })
      const isTrueUser = await compare(password, referedCompany[0].password)
      if (isTrueUser) { //SE COMPANHIA E SENHA FOREM TRUE
        const token = jwt.sign({ name: referedCompany[0].name, email: referedCompany[0].email }, "secretKEYTOKEN")
        const authData = {
          company_name: referedCompany[0].name,
          token: token,
          company: referedCompany[0].id,
          type: "Bearer"
        }
        const isExistsAuthData = await myDataSource.getRepository(CompanyAuth).findBy({ company: Like(`${referedCompany[0].id}`) })
        const isAuthResponse = {
          id: referedCompany[0].id,
          name: referedCompany[0].name,
          email: referedCompany[0].email,
          created_at: referedCompany[0].created_at,
          token: {
            type: "Bearer",
            tokenHash: token
          }
        }
        if (!isExistsAuthData[0]) { // SE REGISTRO DA COMPANHIA AINDA NÃO EXISTIR NA TABELA COMPANY AUTH
          const prepareLogin = await myDataSource.getRepository(CompanyAuth).create(authData)
          const logged = await myDataSource.getRepository(CompanyAuth).save(prepareLogin)
          return isAuthResponse
        } else {
          const newToken = jwt.sign({ name: referedCompany[0].name, email: referedCompany[0].email }, "secretKEYTOKEN")
          const updatedToken = await myDataSource.getRepository(CompanyAuth).createQueryBuilder().update(CompanyAuth).set({ token: newToken }).where("company = :company", { company: referedCompany[0].id })
            .execute()
          const isAuthUpdatedResponse = {
            id: referedCompany[0].id,
            name: referedCompany[0].name,
            email: referedCompany[0].email,
            created_at: referedCompany[0].created_at,
            token: {
              type: "Bearer",
              tokenHash: newToken
            }
          }
          return isAuthUpdatedResponse
        }
      } else {
        return false
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }
  async editCompany({ name, email, cnpj }: IEditCompanyData, token: any): Promise<boolean> {
    try {
      const companyId = await this.getCompanyIdByToken(token)
      const isCnpjAlreadyExists = await myDataSource.getRepository(Companies).findBy({ cnpj: Like(`${cnpj}`) })
      const isEmailAlreadyExists = await myDataSource.getRepository(Companies).findBy({ email: Like(`${email}`) })
      console.log("isalreadyexists", isCnpjAlreadyExists)
      if (companyId) {
        if (!isCnpjAlreadyExists[0] && !isEmailAlreadyExists[0]) {
          const updated = await myDataSource.getRepository(Companies).createQueryBuilder().update(Companies).set({ name: name, email: email, cnpj: cnpj }).where("id = :id", { id: companyId })
            .execute()
        } else {
          if (isEmailAlreadyExists[0] && !isCnpjAlreadyExists[0]) {
            const updated = await myDataSource.getRepository(Companies).createQueryBuilder().update(Companies).set({ name: name, cnpj: cnpj }).where("id = :id", { id: companyId })
              .execute()
          }
          if (isCnpjAlreadyExists[0] && !isEmailAlreadyExists[0]) {
            const updated = await myDataSource.getRepository(Companies).createQueryBuilder().update(Companies).set({ name: name, email: email }).where("id = :id", { id: companyId })
              .execute()
          }
          if (isCnpjAlreadyExists[0] && isEmailAlreadyExists[0]) {
            const updated = await myDataSource.getRepository(Companies).createQueryBuilder().update(Companies).set({ name: name }).where("id = :id", { id: companyId })
              .execute()
          }

        }

        return true
      } else {
        return false
      }
    } catch (error) {
      console.log(error)
      return false

    }

  }
  async deleteCompany(token: string, password: string): Promise<boolean> {
    const companyId = await this.getCompanyIdByToken(token)
    const referedCompany = await myDataSource
      .getRepository(Companies).findBy({ id: Like(`${companyId}`) })
    const isTrueUser = await compare(password, referedCompany[0].password)

    if (isTrueUser) {
      console.log("token", token, companyId, password)
      const deleted = await myDataSource.getRepository(Companies).createQueryBuilder().delete().from(Companies).where("id = :id", { id: `${companyId}` })
        .execute()
      console.log("deleted", deleted)
      return true
    } else {
      return false
    }
  }
  async companySummary(token: string): Promise<ICompanySummary | boolean> {
    const companyId = await this.getCompanyIdByToken(token)
    if (companyId) {
      const referedCompanyById = await myDataSource.getRepository(Companies).findBy({ id: Like(`${companyId}`) })
      const companyOrders = await myDataSource.getRepository(Order).findBy({ owner_company: Like(`${companyId}`) })
      const companyExpenses = await myDataSource.getRepository(Expense).findBy({ owner_company: Like(`${companyId}`) })
      const templateSummary = {
        company_name: referedCompanyById[0].name,
        orders_summary: {
          page: 1,
          perPage: 20,
          total_records: companyOrders.length,
          all_orders: companyOrders
        },
        expenses_summary: {
          page: 1,
          perPage: 20,
          total_records: companyExpenses.length,
          all_expenses: companyExpenses
        }
      }
      return templateSummary
    } else {
      return false
    }


  }
  async listCompanyEmployees(token: string): Promise<IListEmployees | boolean> {
    const companyId = await this.getCompanyIdByToken(token)
    if (companyId) {
      console.log(token)
      const employees = await myDataSource.getRepository(Users).findBy({ company: Like(`${companyId}`) })
      const companyById = await myDataSource.getRepository(Companies).findBy({ id: Like(`${companyId}`) })
      const templateCompanyEmployees = {
        company_name: companyById[0].name,
        employees: {
          page: 1,
          perPage: 20,
          total_records: employees.length,
          all_employees: employees
        }
      }
      return templateCompanyEmployees
    } else {
      return false
    }


  }
  async companyData(token: string): Promise<ICompany> {
    const companyIdByToken = await this.getCompanyIdByToken(token)
    const data = await myDataSource.getRepository(Companies).findBy({ id: Like(`${companyIdByToken}`) })
    return data[0]
  }
  async changePassword({ password, newPassword }: any, token: string): Promise<boolean> {
    const companyIdByToken = await this.getCompanyIdByToken(token)
    const company = await myDataSource.getRepository(Companies).findBy({ id: Like(`${companyIdByToken}`) })
    const isTrueUser = await compare(password, company[0].password)
    if (isTrueUser) {
      const newHash = await hash(newPassword, 10)
      const changed = myDataSource.getRepository(Companies).createQueryBuilder().update(Companies).set({ password: newHash }).where("id = :id", { id: companyIdByToken })
        .execute()
      return true
    }
    return false
  }
  // END COMPANIES
    // START EXPENSES
    async createExpense({ status, value, description }: any, token: string): Promise<boolean> {
      const companyIdByToken = await this.getCompanyIdByToken(token)
      if (companyIdByToken) {
        const newExpense = {
          expense_id: `${(Math.random() * (Math.random()) * 1000)}`,
          owner_company: companyIdByToken,
          description: description,
          status: status,
          value: parseInt(value),
        }
        const create = await myDataSource.getRepository(Expense).create(newExpense)
        const created = await myDataSource.getRepository(Expense).save(create)
        return true
      } else {
        return false
      }
  
    }
    async editExpense({ description, value, status }: any, expenseId: string, token: string): Promise<boolean> {
      console.log(description, value, status, expenseId, token)
      const userId = this.getUserIdByToken(token)
      console.log(userId)
      if (userId) {
        const edited = await myDataSource.getRepository(Expense).createQueryBuilder().update(Expense).set({ description, value, status }).where("expense_id = :id", { id: expenseId })
          .execute()
        return true
      } else {
        return false
      }
    }
    async listExpenses(token: string): Promise<IListExpense> {
      const companyId = await this.getCompanyIdByToken(token)
      const referedCompanyById = await myDataSource.getRepository(Companies).findBy({ id: Like(`${companyId}`) })
      console.log("referedbyId", referedCompanyById[0])
      const companyExpenses = await myDataSource.getRepository(Expense).findBy({ owner_company: Like(`${companyId}`) })
      console.log("companyOrders", companyExpenses)
      const templateSummary = {
        expenses_summary: {
          page: 1,
          perPage: 20,
          total_records: companyExpenses.length,
          all_expenses: companyExpenses
        }
      }
      return templateSummary
    }
    async deleteExpense(expenseId: string, token: string): Promise<boolean> {
      const companyId = await this.getCompanyIdByToken(token)
      if (companyId) {
        const deleted = await myDataSource.getRepository(Expense).createQueryBuilder().delete().from(Order).where("expense_id = :id", { id: Like(`${expenseId}`) })
          .execute()
        return true
      } else {
        return false
      }
    }
    // END EXPENSES
  // START ORDERS
  async createOrder({ status, value, description, client, km, driver }: any, token: string): Promise<boolean> {
    const companyIdByToken = await this.getCompanyIdByToken(token)
    if (companyIdByToken) {
      const newOrder = {
        order_id: `${(Math.random() * (Math.random()) * 1000)}`,
        owner_company: companyIdByToken,
        description: description,
        client,
        km,
        driver,
        status: status,
        value: parseInt(value),
      }
      const create = await myDataSource.getRepository(Order).create(newOrder)
      const created = await myDataSource.getRepository(Order).save(create)

      return true
    } else {
      return false
    }


  }
  async editOrder({ description, value, status, driver, km }: any, orderId: string, token: string): Promise<boolean> {
    const userId = this.getUserIdByToken(token)
    if (userId) {
      console.log(userId)
      const edited = await myDataSource.getRepository(Order).createQueryBuilder().update(Order).set({ description, value, status, driver, km }).where("order_id = :id", { id: orderId })
        .execute()
      return true
    } else {
      return false
    }
  }
  async listOrders(token: string): Promise<IListOrder | boolean> {
    const companyId = await this.getCompanyIdByToken(token)
    if (companyId) {
      const companyOrders = await myDataSource.getRepository(Order).findBy({ owner_company: Like(`${companyId}`) })
      const referedCompanyById = await myDataSource.getRepository(Companies).findBy({ id: Like(`${companyId}`) })
      const templateSummary = {
        orders_summary: {
          page: 1,
          perPage: 20,
          total_records: companyOrders.length,
          all_orders: companyOrders
        }
      }
      return templateSummary
    } else {
      return false
    }
  }
  async deleteOrder(orderId: string, token: string): Promise<boolean> {
    const companyId = await this.getCompanyIdByToken(token)
    if (companyId) {
      const deleted = await myDataSource.getRepository(Order).createQueryBuilder().delete().from(Order).where("order_id = :id", { id: Like(`${orderId}`) })
        .execute()
      return true
    } else {
      return false
    }

  }
  // END ORDERS

  // START USERS
  async getUserIdByToken(token: string): Promise<string> {
    try {
      let companyId
      const referedUserIdByToken = await myDataSource.getRepository(UserAuth).findBy({ token: Like(`${token}`) })
      console.log("loggedCompanyId", referedUserIdByToken)
      if (referedUserIdByToken.length !== 0) {
        companyId = referedUserIdByToken[0].user
        return companyId
      } else {
        return ""
      }
    } catch (error) {
      console.log(error)
      return ""
    }
  }
  async listAllUsers(): Promise<IUser[]> {
    const users = await myDataSource.getRepository(Users).find()
    return users

  }
  async createUser({ name, email, password, cpf }: IUserData, token: string): Promise<boolean> {
    const companyId = await this.getCompanyIdByToken(token)
    const hashedPassword = await hash(password, 10)
    const isOkUserData = {
      id: `${(Math.random() * (Math.random()) * 1000)}`,
      name,
      email,
      password: hashedPassword,
      company: companyId,
      cpf
    }

    try {

      const create = await myDataSource.getRepository(Users).create(isOkUserData)
      const created = await myDataSource.getRepository(Users).save(create)
      return true


    } catch (error) {
      console.log(error)
      return false
    }
  }
  async editUser({ name, email, password, cpf }: any, token: string, userId: string): Promise<boolean> {
   try {
    const companyIdByToken = await this.getCompanyIdByToken(token)
    const edited = await myDataSource.getRepository(Users).createQueryBuilder().update(Users).set({ name, email, password, cpf }).where("id = :id", { id: userId })
      .execute()
   } catch (error) {
    return false
   }
    return true
  }
  async userAuth({ email, password }): Promise<IUserAuthResponse | boolean> {
    try {
      const referedUser = await myDataSource
        .getRepository(Users).findBy({ email: Like(`${email}`) })
      const isTrueUser = await compare(password, referedUser[0].password)
      if (isTrueUser) { //SE COMPANHIA E SENHA FOREM TRUE
        const token = jwt.sign({ name: referedUser[0].name, email: referedUser[0].email }, "secretKEYTOKEN")
        const authData = {
          user_name: referedUser[0].name,
          token: token,
          user: referedUser[0].id,
          type: "Bearer"
        }
        const isExistsAuthData = await myDataSource.getRepository(CompanyAuth).findBy({ company: Like(`${referedUser[0].id}`) })
        const isAuthResponse = {
          id: referedUser[0].id,
          name: referedUser[0].name,
          email: referedUser[0].email,
          created_at: referedUser[0].created_at,
          token: {
            type: "Bearer",
            tokenHash: token
          }
        }
        if (!isExistsAuthData[0]) { // SE REGISTRO DA COMPANHIA AINDA NÃO EXISTIR NA TABELA COMPANY AUTH
          const prepareLogin = await myDataSource.getRepository(UserAuth).create(authData)
          const logged = await myDataSource.getRepository(UserAuth).save(prepareLogin)
          return isAuthResponse
        } else {
          const newToken = jwt.sign({ name: referedUser[0].name, email: referedUser[0].email }, "secretKEYTOKEN")
          const updatedToken = await myDataSource.getRepository(UserAuth).createQueryBuilder().update(UserAuth).set({ token: newToken }).where("user = :user", { user: referedUser[0].id })
            .execute()
          const isAuthUpdatedResponse = {
            id: referedUser[0].id,
            name: referedUser[0].name,
            email: referedUser[0].email,
            created_at: referedUser[0].created_at,
            token: {
              type: "Bearer",
              tokenHash: newToken
            }
          }
          return isAuthUpdatedResponse
        }
      } else {
        return false
      }
    } catch (error) {
      console.log(error)
      return false
    }
    // return {ok: "OK"}
  }
 

  async userSummary(token: string): Promise<IUserSummary> {
    const userId = await this.getUserIdByToken(token)
    const userOrders = await myDataSource.getRepository(Order).findBy({ driver: Like(`${userId}`) })
    console.log(userOrders)
    let totalKm: number = 0
    for (let i = 0; i < userOrders.length; i++) {
      totalKm = totalKm + userOrders[i].km
    }
    //   const totalKm = userOrders.reduce((prev , curr): any => {
    //     return prev.km + curr.km 
    //  })
    const templateSummary = {
      total_km: totalKm,
      total_pedidos: userOrders.length,
      total_pedidos_finalizados: userOrders.filter((e) => e.status === "Concluída").length
    }
    return templateSummary
  }
  async deleteUser(token: string, userId: string): Promise<boolean> {
   try {
    const companyIdByToken = await this.getCompanyIdByToken(token)
    const deleted = await myDataSource.getRepository(Users).createQueryBuilder().delete().from(Users).where("id = :id", { id: `${userId}` })
      .execute()
   } catch (error) {
    return false
   }
    return true
  }
}
