import { Router } from "express";
import { container } from "tsyringe";
import { CreateUserController } from "use-cases/users/create-user/create-user-controller";
import { DeleteUserController } from "use-cases/users/delete-user/delete-user-controller";
import { GetUserController } from "use-cases/users/get-user/get-user-controller";
import { UpdateUserController } from "use-cases/users/update-user/update-user-controller";



const userRoutes = Router()

const createUserController = container.resolve(CreateUserController)
const getUserController = container.resolve(GetUserController)
const updateUserController = container.resolve(UpdateUserController)
const deleteUserController = container.resolve(DeleteUserController)

userRoutes.post('/', createUserController.handle)
userRoutes.get('/:id', getUserController.handle)
userRoutes.patch('/update-user/:id', updateUserController.handle)
userRoutes.delete('/:id', deleteUserController.handle)

export { userRoutes }