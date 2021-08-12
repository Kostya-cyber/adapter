import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + `/../.env` });
import { userPostgresRepository } from "./modules/user/user.postgres.repository";
import { userMongoRepository } from "./modules/user/user.mongo.repository";
import { Adapter } from "./modules/user/adapter";
import { ICreateUserDto } from "./modules/user/dto/create-user.dto";
import { pool } from "./config/postgresDbConnection";
import { IUserDto } from "./modules/user/dto/user.dto";
import mongoose from "./config/mongoDbConnection";

const adapterPg = new Adapter(userPostgresRepository);
const adapterMongo = new Adapter(userMongoRepository);

const user: ICreateUserDto = {
  login: "vasya",
  password: "228",
};

const userUpdate: IUserDto = {
  id: "61155cdf5656a93a48305dc2",
  login: "ivanov",
  password: "1337",
};
(async () => {
  //   await adapterPg.createUser(user);

  //   await adapterPg.deleteUser(3);

  //   await adapterPg.updateUser(userUpdate);

  // const users1 = await adapterPg.getUsers();
  // console.log(users1);

  //   const user1 = await adapterPg.getUser(10);
  //   console.log(user1);

  //await adapterMongo.updateUser(userUpdate);

  //await adapterMongo.createUser(user);

  // await adapterMongo.deleteUser("61155cdf5656a93a48305dc2");

  // const users2 = await adapterMongo.getUsers();
  // console.log(users2);

  // const user2 = await adapterMongo.getUser("61155cdf5656a93a48305dc2");
  // console.log(user2);

  await pool.end();
  await mongoose.disconnect();
})();
