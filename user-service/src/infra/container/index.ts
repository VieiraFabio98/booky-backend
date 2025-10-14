import { UserRepository } from "@domain/repositories/UserRepository";
import { container } from "tsyringe";


container.registerSingleton('UserRepository', UserRepository)