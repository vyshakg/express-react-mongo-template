import mongoose from "mongoose";
import chalk from "chalk";

const MONGO_URL = "mongodb://localhost:27017/<>";

export const createDbConn = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      autoIndex: false
    });

    mongoose.set("debug", true);
    console.log(chalk.bgBlueBright("Connected to DataBase"));
  } catch (e) {
    console.log(chalk.red(e));
    throw new Error("Coundn't connect to Database");
  }
};
