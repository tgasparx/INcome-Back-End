import CompaniesRepository from "../repositories/CompaniesRepository";
import CreateNewCompanyController from "./CreateNewCompanyController";
import ListAllCompaniesController from "./ListAllCompaniesController";
import CreateNewCompanyUseCase from "../useCases/CreateNewCompanyUseCase";
import ListAllCompaniesUseCase from "../useCases/ListAllCompaniesUseCase";
import Database from "../../../database";
import CompanyAuthController from "./CompanyAuthController";
import CompanyAuthUseCase from "../useCases/CompanyAuthUseCase";
import CompanyEditController from "./CompanyEditController";
import DeleteCompanyController from "./DeleteCompanyController";
import CompanySummaryController from "./CompanySummaryController";
import CompanySummaryUseCase from "../useCases/CompanySummaryUseCase";
import CompanyDataController from "./CompanyDataController";
import CompanyDataUseCase from "../useCases/CompanyDataUseCase";
import ListCompanyEmployeesController from "./ListCompanyEmployeesController";
import ListCompanyEmployeesUseCase from "../useCases/ListCompanyEmployeesUseCase";
import DeleteCompanyUseCase from "../useCases/DeleteCompanyUseCase";
import CompanyEditUseCase from "../useCases/CompanyEditUseCase";
import ChangePasswordController from "./ChangePasswordController";
import ChangePasswordUseCase from "../useCases/ChangePasswordUseCase";
import IDatabase from "../../../database/IDatabase";
import { ICompaniesRepository } from "../repositories/ICompaniesRepository";
import IListAllCompaniesUseCase from "../useCases/IListAllCompaniesUseCase";
import IListAllCompaniesController from "./IListAllCompaniesController";
import ICompanyAuthUseCase from "../useCases/ICompanyAuthUseCase";
import ICompanyAuthController from "./ICompanyAythController";
import ICompanyEditUseCase from "../useCases/ICompanyEditUseCase";
import ICompanyEditController from "./ICompanyEditController";
import IDeleteCompanyUseCase from "../useCases/IDeleteCompanyUseCase";
import IDeleteCompanyController from "./IDeleteCompanyController";
import ICompanySummaryUseCase from "../useCases/ICompanySummaryUseCase";
import ICompanySummaryController from "./ICompanySummaryController";
import ICompanyDataUseCase from "../useCases/ICompanyDataUseCase";
import ICompanyDataController from "./ICompanyDataController";
import IListCompanyEmployeesUseCase from "../useCases/IListCompanyEmployeesUseCase";
import IListCompanyEmployeesController from "./IListCompanyEmployeesController";
import IChangePasswordUseCase from "../useCases/IChangePasswordUseCase";
import IChangePasswordController from "./IChangePasswordController";
import MemorizedAuthCompanyController from "./MemorizedAuthCompanyController";
import MemorizedAuthCompanyUseCase from "../useCases/MemorizedAuthCompanyUseCase";

const database: IDatabase = new Database()
// START COMPANIES
const companiesRepository: ICompaniesRepository = new CompaniesRepository(database)

const createNewCompanyUseCase = new CreateNewCompanyUseCase(companiesRepository)
export const createNewCompanyController = new CreateNewCompanyController(createNewCompanyUseCase)

const listAllCompaniesUseCase: IListAllCompaniesUseCase = new ListAllCompaniesUseCase(companiesRepository)
export const listAllCompaniesController: IListAllCompaniesController = new ListAllCompaniesController(listAllCompaniesUseCase)

const companyAuthUseCase: ICompanyAuthUseCase = new CompanyAuthUseCase(companiesRepository)
export const companyAuthController: ICompanyAuthController = new CompanyAuthController(companyAuthUseCase)

const companyEditUseCase: ICompanyEditUseCase = new CompanyEditUseCase(companiesRepository)
export const companyEditController: ICompanyEditController = new CompanyEditController(companyEditUseCase)

const deleteCompanyUseCase: IDeleteCompanyUseCase = new DeleteCompanyUseCase(companiesRepository)
export const deleteCompanyController: IDeleteCompanyController = new DeleteCompanyController(deleteCompanyUseCase)

const companySummaryUseCase: ICompanySummaryUseCase = new CompanySummaryUseCase(companiesRepository)
export const companySummaryController: ICompanySummaryController = new CompanySummaryController(companySummaryUseCase)

const companyDataUseCase: ICompanyDataUseCase = new CompanyDataUseCase(companiesRepository)
export const companyDataController: ICompanyDataController = new CompanyDataController(companyDataUseCase)

const listCompanyEmployeesUseCase: IListCompanyEmployeesUseCase = new ListCompanyEmployeesUseCase(companiesRepository)
export const listCompanyEmployeesController: IListCompanyEmployeesController = new ListCompanyEmployeesController(listCompanyEmployeesUseCase)

const changePasswordUseCase: IChangePasswordUseCase = new ChangePasswordUseCase(companiesRepository)
export const changePasswordController: IChangePasswordController = new ChangePasswordController(changePasswordUseCase)

const memorizedAuthCompanyUseCase = new MemorizedAuthCompanyUseCase(companiesRepository)
export const memorizedAuthCompanyController = new MemorizedAuthCompanyController(memorizedAuthCompanyUseCase)
// END COMPANIES
