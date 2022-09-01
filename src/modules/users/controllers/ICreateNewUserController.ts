import { Request, Response } from "express";
import ICreateNewUserUseCase from "../useCases/ICreateNewUserUseCase";



export default interface ICreateNewUserController{
    createNewUserUseCase: ICreateNewUserUseCase
    handle: (request: Request, response: Response) => Promise<Response>
}