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
const database = new Database()
const usersRepository = new UsersRepository(database)
const createNewUserUseCase = new CreateNewUserUseCase(usersRepository)
export const createNewUserController = new CreateNewUserController(createNewUserUseCase)


const listAllUsersUseCase = new ListAllUsersUseCase(usersRepository)
export const listAllUsersController = new ListAllUsersController(listAllUsersUseCase)

const userAuthUseCase = new UserAuthUseCase(usersRepository)
export const userAuthController = new UserAuthController(userAuthUseCase)

const userEditUseCase = new UserEditUseCase(usersRepository)
export const userEditController = new UserEditController(userEditUseCase)


const deleteUserUseCase = new DeleteUserUseCase(usersRepository)
export const deleteUserController = new DeleteUserController(deleteUserUseCase)

const userSummaryUseCase = new UserSummaryUseCase(usersRepository)
export const userSummaryController = new UserSummaryController(userSummaryUseCase)

export const userDataController = new UserDataController()