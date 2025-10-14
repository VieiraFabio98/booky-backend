import { Router } from "express";
import { container } from "tsyringe";
import { CreateUserController } from "use-cases/users/create-user/create-user-controller";


const userRoutes = Router()

const createUserController = container.resolve(CreateUserController)

userRoutes.post('/', createUserController.handle)

export { userRoutes }