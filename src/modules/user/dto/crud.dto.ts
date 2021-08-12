import { ICreateUserDto } from "./create-user.dto";
import { IUserDto } from "./user.dto";

export interface ICrudDto {
  createUser(user: ICreateUserDto): Promise<void>;
  getUser(id: string): Promise<IUserDto>;
  getUsers(): Promise<IUserDto[]>;
  updateUser(user: IUserDto): Promise<void>;
  deleteUser(id: string): Promise<void>;
}
