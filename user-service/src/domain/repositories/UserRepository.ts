import { User } from "@domain/entities/User";
import { IUserCreateDTO } from "@dto/IUserCreateDTO";
import appDataSource from "@infra/database/data-source";
import { Repository, QueryRunner } from "typeorm";


class UserRepository {

  private repository: Repository<User>

  constructor() {
    this.repository = appDataSource.getRepository(User)
  }

  async create(data: IUserCreateDTO, queryRunner: QueryRunner): Promise<User> {
    try {
      const user = this.repository.create(data)

      const result = await queryRunner.manager.save(user)

      return result
      
    }catch(error) {
      throw error 
    }
  }

  async get(id: string): Promise<User | null> {
    try {
      const user = await this.repository.findOneBy({ id: id})
      
      return user
    } catch(error) {
      throw error
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    try {
      const user = await this.repository.findOneBy({ email: email})
      
      return user
    } catch(error) {
      throw error
    }
  }

}


export { UserRepository }