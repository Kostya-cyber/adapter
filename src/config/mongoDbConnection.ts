import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userScheme = new Schema({
  login: String,
  password: String,
});

mongoose.connect(
  `${process.env.MONGO_CONNECTION}://${process.env.PG_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_USERNAME}`,
  { useUnifiedTopology: true, useNewUrlParser: true }
);

export const User = mongoose.model("User", userScheme);
export default mongoose;
