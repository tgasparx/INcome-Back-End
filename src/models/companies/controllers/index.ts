import CompaniesRepository from "../repositories/CompaniesRepository";
import CreateNewCompanyController from "./CreateNewCompanyController";
import ListAllCompaniesController from "./ListAllCompaniesController";
import CreateNewCompanyUseCase from "./useCases/CreateNewCompanyUseCase";
import ListAllCompaniesUseCase from "./useCases/ListAllCompaniesUseCase";
import Database from "../../../database";
import CompanyAuthController from "./CompanyAuthController";
import CompanyAuthUseCase from "./useCases/CompanyAuthUseCase";
import CompanyEditController from "./CompanyEditController";
import DeleteCompanyController from "./DeleteCompanyController";
import CompanySummaryController from "./CompanySummaryController";
import CompanySummaryUseCase from "./useCases/CompanySummaryUseCase";
const database = new Database()
// START COMPANIES
const companiesRepository = new CompaniesRepository(database)

const createNewCompanyUseCase = new CreateNewCompanyUseCase(companiesRepository)
export const createNewCompanyController = new CreateNewCompanyController(createNewCompanyUseCase)

const listAllCompaniesUseCase = new ListAllCompaniesUseCase(companiesRepository)
export const listAllCompaniesController = new ListAllCompaniesController(listAllCompaniesUseCase)

const companyAuthUseCase = new CompanyAuthUseCase(companiesRepository)
export const companyAuthController = new CompanyAuthController(companyAuthUseCase)

export const companyEditController = new CompanyEditController()
export const deleteCompanyController = new DeleteCompanyController()

const companySummaryUseCase = new CompanySummaryUseCase(companiesRepository)
export const companySummaryController = new CompanySummaryController(companySummaryUseCase)
// END COMPANIES
