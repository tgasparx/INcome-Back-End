import Database from "../../../database";
import ICompanyData from "../models/ICompanyData";



export interface ICompaniesRepository{
    database: Database
    listAllCompanies: () => Promise<any>
    createCompany: (companyData: ICompanyData) => Promise<any>  
    editCompany: ({ name, email, cnpj }: any, token: string) => Promise<any>
    authCompany: ({ email, password }) => Promise<any>
    companySummary: (token: string) => Promise<any> 
    listCompanyEmployees: (token: string) => Promise<any>
    deleteCompany: (token: string, password: string) => Promise<any>
    companyData: (token: string) => Promise<any>
    changePassword: ({ password, newPassword }: any, token: string) => Promise<boolean>
}