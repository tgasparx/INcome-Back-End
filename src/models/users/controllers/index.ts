import UsersRepository from "../repositories/UsersRepository";
import CreateNewUserController from "./CreateNewUserController";
import DeleteUserController from "./DeleteUserController";
import ListAllUsersController from "./ListAllUsersController";
import CreateNewUserUseCase from "../useCases/CreateNewUserUseCase";
import UserSummaryUseCase from "../useCases/UserSummaryUseCase";
import UserAuthController from "./UserAuthController";
import UserEditController from "./UserEditController";
import UserSummaryController from "./UserSummaryController";
import Database from "../../../database";
import UserDataController from "./UserDataController";
import ListAllUsersUseCase from "../useCases/ListAllUsersUseCase";
import UserEditUseCase from "../useCases/UserEditUseCase";
import DeleteUserUseCase from "../useCases/DeleteUserUseCase";
import UserAuthUseCase from "../useCases/UserAuthUseCase";
import UserDataUseCase from "../useCases/UserDataUseCase";
import IListAllUsersUseCase from "../useCases/IListAllUsersUseCase";
import IListAllUsersController from "./IListAllUsersController";
import IUserAuthUseCase from "../useCases/IUserAuthUseCase";
import IUserEditUseCase from "../useCases/IUserEditUseCase";
import IDeleteUserUseCase from "../useCases/IDeleteUserUseCase";
import IDeleteUserController from "./IDeleteUserController";
import IUserSummaryUseCase from "../useCases/IUserSummaryUserCase";
import IUserSummaryController from "./IUserSummaryController";
import IUserDataUseCase from "../useCases/IUserDataUseCase";
import IUserDataController from "./IUserDataController";
import IUserAuthController from "./IUserAuthController";
import IUserEditController from "./IUserEditController";
import ICreateNewUserController from "./ICreateNewUserController";
import ICreateNewUserUseCase from "../useCases/ICreateNewUserUseCase";
import IUsersRepository from "../repositories/IUsersRepository";
import IDatabase from "../../../database/IDatabase";



const database: IDatabase = new Database()
const usersRepository: IUsersRepository = new UsersRepository(database)





const createNewUserUseCase: ICreateNewUserUseCase = new CreateNewUserUseCase(usersRepository)
export const createNewUserController: ICreateNewUserController = new CreateNewUserController(createNewUserUseCase)


const listAllUsersUseCase: IListAllUsersUseCase = new ListAllUsersUseCase(usersRepository)
export const listAllUsersController: IListAllUsersController = new ListAllUsersController(listAllUsersUseCase)

const userAuthUseCase: IUserAuthUseCase = new UserAuthUseCase(usersRepository)
export const userAuthController: IUserAuthController = new UserAuthController(userAuthUseCase)

const userEditUseCase: IUserEditUseCase = new UserEditUseCase(usersRepository)
export const userEditController: IUserEditController = new UserEditController(userEditUseCase)

const deleteUserUseCase: IDeleteUserUseCase = new DeleteUserUseCase(usersRepository)
export const deleteUserController: IDeleteUserController = new DeleteUserController(deleteUserUseCase)

const userSummaryUseCase: IUserSummaryUseCase = new UserSummaryUseCase(usersRepository)
export const userSummaryController: IUserSummaryController = new UserSummaryController(userSummaryUseCase)

const userDataUseCase: IUserDataUseCase = new UserDataUseCase(usersRepository)
export const userDataController: IUserDataController = new UserDataController(userDataUseCase)