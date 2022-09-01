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
import ICompanyData from "../modules/companies/models/ICompanyData";
import ICompanyAuthReponse from "../modules/companies/models/ICompanyAuthResponse";
import IEditCompanyData from "../modules/companies/models/IEditCompanyData";
import IUserData from "../modules/users/models/IUserData";
import IUser from "../modules/users/models/IUser";
import IUserAuthResponse from "../modules/users/models/IUserAuthResponse";
import IUserSummary from "../modules/users/models/IUserSummary";
import IListExpense from "../modules/expenses/models/IListExpense";
import IListOrder from "../modules/orders/models/IListOrder";
import ICompany from "../modules/companies/models/ICompany";
import IListEmployees from "../modules/companies/models/IListEmployees";
import ICompanySummary from "../modules/companies/models/ICompanySummary";
import IDatabase from "./IDatabase";
import ICompanyAuthData from "../modules/companies/models/ICompanyAuthData";
import IChangePasswordData from "../modules/companies/models/IChangePasswordData";
import IOrderData from "../modules/orders/models/IOrderData";
import IEditOrderData from "../modules/orders/models/IEditOrderData";
import IEditExpenseData from "../modules/expenses/models/IEditExpenseData";
import IExpenseData from "../modules/expenses/models/IExpenseData";
import IEditUserData from "../modules/users/models/IEditUserData";


export default class Database implements IDatabase {
  constructor() {
  }


  // START COMPANIES
  async getCompanyIdByToken(token: string): Promise<string | ""> {
    try {
      const referedCompanyIdByToken: CompanyAuth[] = await myDataSource.getRepository(CompanyAuth).findBy({ token: Like(`${token}`) })
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
  async listAllCompanies(): Promise<Companies[] | false> {
    try {
      const companies: Companies[] = await myDataSource
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
  async companyAuth({ email, password }: ICompanyAuthData): Promise<ICompanyAuthReponse | false> {
    async function executeCompare(referedCompany: Companies[] | undefined) {
      const result: boolean = await compare(password, referedCompany[0].password)
      return result
    }
    try {
      const referedCompany: Companies[] | undefined = await myDataSource
        .getRepository(Companies).findBy({ email: Like(`${email}`) })
      const isTrueUser = (referedCompany: Companies[] | undefined) => referedCompany[0] ? executeCompare(referedCompany) : false
      if (isTrueUser(referedCompany)) { //SE A COMPARAÇÃO DO HASH COM A SENHA INFORMADA FOR TRUE
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
  async editCompany({ name, email, cnpj }: IEditCompanyData, token: string): Promise<boolean> {
    try {
      const companyId: string = await this.getCompanyIdByToken(token)
      const isCnpjAlreadyExists: Companies[] = await myDataSource.getRepository(Companies).findBy({ cnpj: Like(`${cnpj}`) })
      const isEmailAlreadyExists: Companies[] = await myDataSource.getRepository(Companies).findBy({ email: Like(`${email}`) })
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
    const companyId: string | "" = await this.getCompanyIdByToken(token)
    try {
      const referedCompany: Companies[] = await myDataSource
        .getRepository(Companies).findBy({ id: Like(`${companyId}`) })
      const isTrueUser: boolean = await compare(password, referedCompany[0].password)
      if (companyId) {

        if (isTrueUser) {
          console.log("token", token, companyId, password)
          const deleted = await myDataSource.getRepository(Companies).createQueryBuilder().delete().from(Companies).where("id = :id", { id: `${companyId}` })
            .execute()
          console.log("deleted", deleted)
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    } catch (error) {
      return false
    }

  }
  async companySummary(token: string): Promise<ICompanySummary | false> {
    const companyId: string | "" = await this.getCompanyIdByToken(token)
    if (companyId) {
      try {
        const referedCompanyById: Companies[] = await myDataSource.getRepository(Companies).findBy({ id: Like(`${companyId}`) })
        const companyOrders: Order[] = await myDataSource.getRepository(Order).findBy({ owner_company: Like(`${companyId}`) })
        const companyExpenses: Expense[] = await myDataSource.getRepository(Expense).findBy({ owner_company: Like(`${companyId}`) })
        const templateSummary: ICompanySummary = {
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
      } catch (error) {
        return false
      }
    } else {
      return false
    }


  }
  async listCompanyEmployees(token: string): Promise<IListEmployees | false> {
    const companyId = await this.getCompanyIdByToken(token)
    if (companyId) {
      try {
        const employees = await myDataSource.getRepository(Users).findBy({ company: Like(`${companyId}`) })
        const companyById = await myDataSource.getRepository(Companies).findBy({ id: Like(`${companyId}`) })
        const templateCompanyEmployees: IListEmployees = {
          company_name: companyById[0].name,
          employees: {
            page: 1,
            perPage: 20,
            total_records: employees.length,
            all_employees: employees
          }
        }
        return templateCompanyEmployees
      } catch (error) {
        return false
      }
    } else {
      return false
    }


  }
  async companyData(token: string): Promise<ICompany | false> {
    const companyIdByToken: string | "" = await this.getCompanyIdByToken(token)

    if (companyIdByToken) {
      try {
        const data: Companies[] = await myDataSource.getRepository(Companies).findBy({ id: Like(`${companyIdByToken}`) })
        return data[0]
      } catch (error) {
        return false
      }
    } else {
      return false
    }

  }
  async changePassword({ password, newPassword }: IChangePasswordData, token: string): Promise<boolean> {
    const companyIdByToken: string | "" = await this.getCompanyIdByToken(token)
    if (companyIdByToken) {
      try {
        const company = await myDataSource.getRepository(Companies).findBy({ id: Like(`${companyIdByToken}`) })
        const isTrueUser = await compare(password, company[0].password)
        if (isTrueUser) {
          const newHash = await hash(newPassword, 10)
          const changed = myDataSource.getRepository(Companies).createQueryBuilder().update(Companies).set({ password: newHash }).where("id = :id", { id: companyIdByToken })
            .execute()
          return true
        }
        return false
      } catch (error) {
        return false
      }
    } else {
      return false
    }

  }
  // END COMPANIES
  // START EXPENSES
  async createExpense({ status, value, description }: IExpenseData, token: string): Promise<boolean> {
    const companyIdByToken = await this.getCompanyIdByToken(token)
    if (companyIdByToken) {
      try {
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
      } catch (error) {
        return false
      }
    } else {
      return false
    }

  }
  async editExpense({ description, value, status }: IEditExpenseData, expenseId: string, token: string): Promise<boolean> {
    const userId = this.getUserIdByToken(token)
    if (userId) {
      try {
        const edited = await myDataSource.getRepository(Expense).createQueryBuilder().update(Expense).set({ description, value, status }).where("expense_id = :id", { id: expenseId })
          .execute()
        return true
      } catch (error) {
        return false
      }
    } else {
      return false
    }
  }
  async listExpenses(token: string): Promise<IListExpense | false> {
    const companyId = await this.getCompanyIdByToken(token)
    if (companyId) {
      try {
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
      } catch (error) {
        return false
      }
    } else {
      return false
    }
  }
  async deleteExpense(expenseId: string, token: string): Promise<boolean> {
    const companyId = await this.getCompanyIdByToken(token)
    if (companyId) {
      try {
        const deleted = await myDataSource.getRepository(Expense).createQueryBuilder().delete().from(Order).where("expense_id = :id", { id: Like(`${expenseId}`) })
          .execute()
        return true
      } catch (error) {
        return false
      }
    } else {
      return false
    }
  }
  // END EXPENSES
  // START ORDERS
  async createOrder({ status, value, description, client, km, driver }: IOrderData, token: string): Promise<boolean> {
    const companyIdByToken = await this.getCompanyIdByToken(token)
    if (companyIdByToken) {
      try {
        const newOrder = {
          order_id: `${(Math.random() * (Math.random()) * 1000)}`,
          owner_company: companyIdByToken,
          description: description,
          client,
          km,
          driver,
          status: status,
          value,
        }
        const create = await myDataSource.getRepository(Order).create(newOrder)
        const created = await myDataSource.getRepository(Order).save(create)

        return true
      } catch (error) {
        return false
      }
    } else {
      return false
    }


  }
  async editOrder({ description, value, status, driver, km }: IEditOrderData, orderId: string, token: string): Promise<boolean> {
    const userId = this.getUserIdByToken(token)
    if (userId) {
   try {
    console.log(userId)
    const kmnumber = parseInt(km)
    const valuenumber = parseInt(value)

    const edited = await myDataSource.getRepository(Order).createQueryBuilder().update(Order).set({ description, value: valuenumber, status, driver, km: kmnumber }).where("order_id = :id", { id: orderId })
      .execute()
    return true
   } catch (error) {
    return false
   }
    } else {
      return false
    }
  }
  async listOrders(token: string): Promise<IListOrder | false> {
    const companyId = await this.getCompanyIdByToken(token)
    if (companyId) {
    try {
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
    } catch (error) {
     return false 
    }
    } else {
      return false
    }
  }
  async deleteOrder(orderId: string, token: string): Promise<boolean> {
    const companyId = await this.getCompanyIdByToken(token)
    if (companyId) {
      try {
        const deleted = await myDataSource.getRepository(Order).createQueryBuilder().delete().from(Order).where("order_id = :id", { id: Like(`${orderId}`) })
          .execute()
        return true
      } catch (error) {
        return false
      }
    } else {
      return false
    }

  }
  // END ORDERS

  // START USERS
  async getUserIdByToken(token: string): Promise<string | ""> {
    try {
      const referedUserIdByToken = await myDataSource.getRepository(UserAuth).findBy({ token: Like(`${token}`) })
      if (referedUserIdByToken.length !== 0) {
        return referedUserIdByToken[0].user
      } else {
        return ""
      }
    } catch (error) {
      return ""
    }
  }
  async listAllUsers(): Promise<IUser[] | false> {
   try {
    const users: IUser[] = await myDataSource.getRepository(Users).find()
    if(users[0]){
      return users
    }else{
      return false
    }
   } catch (error) {
    return false
   }
  

  }
  async createUser({ name, email, password, cpf }: IUserData, token: string): Promise<boolean> {
    const companyId: string | "" = await this.getCompanyIdByToken(token)
    if(companyId){
      try {
        const hashedPassword = await hash(password, 10)
        const isOkUserData = {
          id: `${(Math.random() * (Math.random()) * 1000)}`,
          name,
          email,
          password: hashedPassword,
          company: companyId,
          cpf
        }
          const create = await myDataSource.getRepository(Users).create(isOkUserData)
          const created = await myDataSource.getRepository(Users).save(create)
          return true
      } catch (error) {
        return false
      }
    }else{
      return false
    }

  }
  async editUser({ name, email, password, cpf }: IEditUserData, token: string, userId: string): Promise<boolean> {
    try {
      const companyIdByToken = await this.getCompanyIdByToken(token)
      const edited = await myDataSource.getRepository(Users).createQueryBuilder().update(Users).set({ name, email, password, cpf }).where("id = :id", { id: userId })
        .execute()
    } catch (error) {
      return false
    }
    return true
  }
  async userAuth({ email, password }): Promise<IUserAuthResponse | false> {
    const referedUser = await myDataSource
      .getRepository(Users).findBy({ email: Like(`${email}`) })
    if (referedUser[0]) {
      try {

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
    } else {
      return false
    }

    // return {ok: "OK"}
  }
  async userSummary(token: string): Promise<IUserSummary | false> {
    const userId = await this.getUserIdByToken(token)
    if (userId) {
      try {
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
      } catch (error) {
        return false
      }
    } else {
      return false
    }
  }
  async userData(token: string): Promise<IUser | false> {
    const userIdByToken = await this.getUserIdByToken(token)
    if (userIdByToken) {
      try {

        const userData = await myDataSource.getRepository(Users).findBy({ id: Like(`${userIdByToken}`) })
        return userData[0]
      } catch (error) {
        return false
      }
    } else {
      return false
    }


  }
  async deleteUser(token: string, userId: string): Promise<boolean> {
    const companyIdByToken: string | "" = await this.getCompanyIdByToken(token)
    if (companyIdByToken) {
      try {

        const deleted = await myDataSource.getRepository(Users).createQueryBuilder().delete().from(Users).where("id = :id", { id: `${userId}` })
          .execute()
        return true
      } catch (error) {
        return false
      }
    } else {
      return false
    }

  }
}
