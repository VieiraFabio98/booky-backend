import { Router } from "express";
import { container } from "tsyringe";
import { CreateUserController } from "use-cases/users/create-user/create-user-controller";
import { GetUserController } from "use-cases/users/get-user/get-user-controller";



const userRoutes = Router()

const createUserController = container.resolve(CreateUserController)
const getUserController = container.resolve(GetUserController)

userRoutes.post('/', createUserController.handle)
userRoutes.get('/:id', getUserController.handle)

export { userRoutes }