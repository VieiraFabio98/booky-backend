import { UserRepository } from "@domain/repositories/UserRepository";
import { IUserUpdateDTO } from "@dto/IUserUpdateDTO";
import appDataSource from "@infra/database/data-source";
import { HttpResponse, notFound, ok, serverError } from "@shared/helpers";
import { inject, injectable } from "tsyringe";


@injectable()
class UpdateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository
  ){}

  async execute({ 
    id, 
    name, 
    email, 
  }: IUserUpdateDTO): Promise<HttpResponse> {
    const queryRunner = appDataSource.createQueryRunner()
    await queryRunner.connect()
    await queryRunner.startTransaction()
    
    try {

      const userExists = await this.userRepository.get(id)

      if(!userExists) {
        return notFound('User not found')
      }

      userExists.name = name ?? userExists.name
      userExists.email = email ?? userExists.email

      const updatedUser = await this.userRepository.update(userExists, queryRunner)
      await queryRunner.commitTransaction()

      return ok(updatedUser)

    } catch(error) {
      await queryRunner.rollbackTransaction()
      return serverError(error as Error)
    } finally {
      await queryRunner.release()
    }
  }
}

export { UpdateUserUseCase }