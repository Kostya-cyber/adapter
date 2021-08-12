import { User } from "../../config/mongoDbConnection";
import { ICreateUserDto } from "./dto/create-user.dto";
import { ICrudDto } from "./dto/crud.dto";
import { IUserDto } from "./dto/user.dto";

class UserMongoRepository implements ICrudDto {
  async createUser(user: ICreateUserDto): Promise<void> {
    await User.create(user);
  }

  async getUser(id: string): Promise<IUserDto> {
    const user: IUserDto = await User.findOne({ _id: id });
    return user;
  }

  async getUsers(): Promise<IUserDto[]> {
    const users: IUserDto[] = await User.find();
    return users;
  }

  async updateUser(user: IUserDto): Promise<void> {
    await User.updateOne(
      { _id: user.id },
      { login: user.login, password: user.password }
    );
  }

  async deleteUser(id: string): Promise<void> {
    await User.deleteOne({ _id: id });
  }
}

export const userMongoRepository = new UserMongoRepository();
