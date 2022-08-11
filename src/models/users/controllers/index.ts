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
const database = new Database()
const usersRepository = new UsersRepository(database)
const createNewUserUseCase = new CreateNewUserUseCase(usersRepository)
export const createNewUserController = new CreateNewUserController(createNewUserUseCase)


export const listAllUsersController = new ListAllUsersController()
export const userAuthController = new UserAuthController()
export const userEditController = new UserEditController()
export const deleteUserController = new DeleteUserController()

const userSummaryUseCase = new UserSummaryUseCase(usersRepository)
export const userSummaryController = new UserSummaryController(userSummaryUseCase)

export const userDataController = new UserDataController()