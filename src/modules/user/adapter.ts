import { ICreateUserDto } from "./dto/create-user.dto";
import { ICrudDto } from "./dto/crud.dto";
import { IUserDto } from "./dto/user.dto";

export class Adapter implements ICrudDto {
  private adaptee: ICrudDto;

  constructor(adaptee: ICrudDto) {
    this.adaptee = adaptee;
  }

  async createUser(user: ICreateUserDto): Promise<void> {
    await this.adaptee.createUser(user);
  }

  async getUser(id: string): Promise<IUserDto> {
    return await this.adaptee.getUser(id);
  }

  async getUsers(): Promise<IUserDto[]> {
    return await this.adaptee.getUsers();
  }

  async updateUser(user: IUserDto): Promise<void> {
    await this.adaptee.updateUser(user);
  }

  async deleteUser(id: string): Promise<void> {
    await this.adaptee.deleteUser(id);
  }
}
