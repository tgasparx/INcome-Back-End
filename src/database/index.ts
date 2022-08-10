import { myDataSource } from "./config/app-data-source";
import { Users } from "./Models/user.entity";
import { Companies } from "./Models/company.entity";
import { UserAuth } from "./Models/UserAuth.entity";
import { CompanyAuth } from "./Models/companyAuth.entity";
import jwt from 'jsonwebtoken'
import { Like } from "typeorm";
import { compare, hash } from 'bcrypt'


export default class Database {
  constructor() {
  }
  // START COMPANIES
  async listAllCompanies() {
    // const companies = await myDataSource.createQueryBuilder(Companies,"companies").leftJoinAndSelect("auth", "auth").execute()

    const companies = await myDataSource
    .getRepository(Companies).find()
    return companies
  }
  async createCompany(companyData: any) {
    const isCompanyEmailAlreadyExists = await myDataSource
      .getRepository(Companies).findBy({ cnpj: Like(`${companyData.company_cnpj}`) })
      const isCompanyCNPJAlreadyExists = await myDataSource
      .getRepository(Companies).findBy({ email: Like(`${companyData.company_email}`) })
    if (!isCompanyEmailAlreadyExists[0] && !isCompanyCNPJAlreadyExists[0]) {// SE COMPANHIA NÃO EXISTIR NO BANCO DE DADOS
      const hashedPassword = await hash(companyData.company_password, 10)
      const IsOkompanyData = {
        name: companyData.company_name,
        email: companyData.company_email,
        password: hashedPassword,
        cnpj: companyData.company_cnpj
      }
      try {
        const create = await myDataSource.getRepository(Companies).create(IsOkompanyData)
        const created = await myDataSource.getRepository(Companies).save(create)
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    } else { // SE O EMAIL OU CNPJ INFORMADO JÁ EXISTIREM IRÁ RETORNAR FALSE
      return false
    }
  }
   async companyAuth({ email, password }) {
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
        if(!isExistsAuthData[0]){ // SE REGISTRO DA COMPANHIA AINDA NÃO EXISTIR NA TABELA COMPANY AUTH
          const prepareLogin = await myDataSource.getRepository(CompanyAuth).create(authData)
          const logged = await myDataSource.getRepository(CompanyAuth).save(prepareLogin)
          return isAuthResponse
        }else{
          const newToken = jwt.sign({ name: referedCompany[0].name, email: referedCompany[0].email }, "secretKEYTOKEN")
          const updatedToken = await myDataSource.getRepository(CompanyAuth).createQueryBuilder().update(CompanyAuth).set({token: newToken}).where("company = :company", {company: referedCompany[0].id})
          .execute()
        return isAuthResponse
        }
      }else{
        return false
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }
  async editCompany() { }
  async deleteCompany() { }
  async companySummary(){
    const templateSummary = {
      page: 1,
      perPage: 20,
      total_records: 100,
      pedidosFinalizadosUltimasDuasSemanas: [],
      totalDePedidos: 0,
      totalDePedidosFInalizados: 10,
    }
    return templateSummary
  }

  // END COMPANIES
  // START USERS
  async listAllUsers() { }
  async createUser() { }
  async editUser() { }
  async deleteUser() { }
  async userAuth() { }
  async userSummary(){
    const templateSummary = {
     total_km: 0,
      total_pedidos: 20,
      dias_trabalhados: 20,
      total_pedidos_finalizados: 100,
    }
    return templateSummary
  }
  // END USERS
}
// export default class Database {
//   constructor() {
//   }
//   // START COMPANIES
//   async listAllCompanies() {
//     const companies = await myDataSource.getRepository(Companies).find()
//     return companies
//   }
//   async createCompany(companyData: any) {
//     const isCompanyEmailAlreadyExists = await myDataSource
//       .getRepository(Companies).findBy({ company_cnpj: Like(`${companyData.company_cnpj}`) })
//       const isCompanyCNPJAlreadyExists = await myDataSource
//       .getRepository(Companies).findBy({ company_email: Like(`${companyData.company_email}`) })
//     if (!isCompanyEmailAlreadyExists[0] && !isCompanyCNPJAlreadyExists[0]) {// SE COMPANHIA NÃO EXISTIR NO BANCO DE DADOS
//       const hashedPassword = await hash(companyData.company_password, 10)
//       const IsOkompanyData = {
//         company_name: companyData.company_name,
//         company_email: companyData.company_email,
//         company_password: hashedPassword,
//         company_cnpj: companyData.company_cnpj
//       }
//       try {
//         const create = await myDataSource.getRepository(Companies).create(IsOkompanyData)
//         const created = await myDataSource.getRepository(Companies).save(create)
//         return true
//       } catch (error) {
//         console.log(error)
//         return false
//       }
//     } else { // SE O EMAIL OU CNPJ INFORMADO JÁ EXISTIREM IRÁ RETORNAR FALSE
//       return false
//     }
//   }
//   async companyAuth({ email, password }) {
//     try {
//       const referedCompany = await myDataSource
//         .getRepository(Companies).findBy({ company_email: Like(`${email}`) })
//       const isTrueUser = await compare(password, referedCompany[0].company_password)
//       if (isTrueUser) { //SE COMPANHIA E SENHA FOREM TRUE
//         const token = jwt.sign({ name: referedCompany[0].company_name, email: referedCompany[0].company_email }, "secretKEYTOKEN")
//         const authData = {
//           company_name: referedCompany[0].company_name,
//           token: token,
//           company: referedCompany[0].company_id,
//           type: "Bearer"
//         }
//         const isExistsAuthData = await myDataSource.getRepository(CompanyAuth).findBy({ company: Like(`${referedCompany[0].company_id}`) })
//         if(!isExistsAuthData[0]){ // SE REGISTRO DA COMPANHIA JA EXISTIR NA TABELA COMPANY AUTH
//           const prepareLogin = await myDataSource.getRepository(CompanyAuth).create(authData)
//           const logged = await myDataSource.getRepository(CompanyAuth).save(prepareLogin)
//           return referedCompany
//         }else{
//           const newToken = jwt.sign({ name: referedCompany[0].company_name, email: referedCompany[0].company_email }, "secretKEYTOKEN")
//           const updatedToken = await myDataSource.getRepository(CompanyAuth).createQueryBuilder().update(CompanyAuth).set({token: newToken}).where("company = :company", {company: referedCompany[0].company_id})
//           .execute()
//         return referedCompany
//         }
//       }else{
//         return false
//       }
//     } catch (error) {
//       console.log(error)
//       return false
//     }
//   }


//   async editCompany() { }
//   async deleteCompany() { }

//   // END COMPANIES
//   // START USERS
//   async listAllUsers() { }
//   async createUser() { }
//   async editUser() { }
//   async deleteUser() { }
//   async userAuth() { }
//   // END USERS
// }