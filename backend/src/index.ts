import cors from "cors";
import express from "express";
import { createDbConn } from "./createDbConn";
import bodyParser from "body-parser";
import chalk from "chalk";

import exampleRoute from "./routes/exampleRoute";

const PORT = 4000;

(async () => {
  const app = express();

  app.disable("x-powered-by");

  await createDbConn();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  const CORSconfig = {
    credentials: true,
    origin: "http://localhost:3000"
  };
  app.use(cors(CORSconfig));

  app.use(exampleRoute);

  app.listen(PORT, () => {
    console.log(
      chalk.bgGreenBright(`server started at http://localhost:${PORT}`)
    );
  });
})();
