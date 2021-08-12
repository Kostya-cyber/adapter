import { ICreateUserDto } from "./dto/create-user.dto";
import { ICrudDto } from "./dto/crud.dto";
import { IUserDto } from "./dto/user.dto";
import { pool } from "../../config/postgresDbConnection";

class UserPostgresRepository implements ICrudDto {
  async createUser(user: ICreateUserDto): Promise<void> {
    await pool.query("INSERT INTO users(login, password) VALUES($1, $2)", [
      user.login,
      user.password,
    ]);
  }

  async getUser(id: string): Promise<IUserDto> {
    const res = await pool.query("SELECT * FROM users WHERE id = $1", [+id]);
    const user: IUserDto = res.rows[0];
    return user;
  }

  async getUsers(): Promise<IUserDto[]> {
    const res = await pool.query("SELECT * FROM users");
    const users: IUserDto[] = res.rows;
    return users;
  }

  async updateUser(user: IUserDto): Promise<void> {
    await pool.query(
      "UPDATE users SET login = $2, password = $3 WHERE id = $1",
      [user.id, user.login, user.password]
    );
  }

  async deleteUser(id: string): Promise<void> {
    await pool.query("DELETE FROM users WHERE id = $1", [+id]);
  }
}

export const userPostgresRepository = new UserPostgresRepository();
