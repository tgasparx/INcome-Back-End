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
const database = new Database()
// START COMPANIES
const companiesRepository = new CompaniesRepository(database)

const createNewCompanyUseCase = new CreateNewCompanyUseCase(companiesRepository)
export const createNewCompanyController = new CreateNewCompanyController(createNewCompanyUseCase)

const listAllCompaniesUseCase = new ListAllCompaniesUseCase(companiesRepository)
export const listAllCompaniesController = new ListAllCompaniesController(listAllCompaniesUseCase)

const companyAuthUseCase = new CompanyAuthUseCase(companiesRepository)
export const companyAuthController = new CompanyAuthController(companyAuthUseCase)

const companyEditUseCase = new CompanyEditUseCase(companiesRepository)
export const companyEditController = new CompanyEditController(companyEditUseCase)

const deleteCompanyUseCase = new DeleteCompanyUseCase(companiesRepository)
export const deleteCompanyController = new DeleteCompanyController(deleteCompanyUseCase)

const companySummaryUseCase = new CompanySummaryUseCase(companiesRepository)
export const companySummaryController = new CompanySummaryController(companySummaryUseCase)

const companyDataUseCase = new CompanyDataUseCase(companiesRepository)
export const companyDataController = new CompanyDataController(companyDataUseCase)

const listCompanyEmployeesUseCase = new ListCompanyEmployeesUseCase(companiesRepository)
export const listCompanyEmployeesController = new ListCompanyEmployeesController(listCompanyEmployeesUseCase)
// END COMPANIES
