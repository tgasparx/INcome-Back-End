import { Request, Response } from "express";
import IChangePasswordUseCase from "../useCases/IChangePasswordUseCase";


export default interface IChangePasswordController{
    changePasswordUseCase: IChangePasswordUseCase
    handle: (request: Request, response: Response) => Promise<Response>
}