import IDatabase from "../../../database/IDatabase";
import { Companies } from "../../../database/Models/company.entity";
import ICompany from "../models/ICompany";
import ICompanyAuthReponse from "../models/ICompanyAuthResponse";
import ICompanyData from "../models/ICompanyData";
import ICompanySummary from "../models/ICompanySummary";
import IListEmployees from "../models/IListEmployees";



export interface ICompaniesRepository{
    database: IDatabase
    listAllCompanies: () => Promise<Companies[] | false>
    createCompany: (companyData: ICompanyData) => Promise<boolean>  
    editCompany: ({ name, email, cnpj }: any, token: string) => Promise<boolean>
    authCompany: ({ email, password }) => Promise<ICompanyAuthReponse | false>
    companySummary: (token: string) => Promise<ICompanySummary | false> 
    listCompanyEmployees: (token: string) => Promise<IListEmployees | false>
    deleteCompany: (token: string, password: string) => Promise<any>
    companyData: (token: string) => Promise<ICompany | false>
    changePassword: ({ password, newPassword }: any, token: string) => Promise<boolean>
}