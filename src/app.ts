import express from "express";
import config from "config";
import logger from "./utils/logger";
import routes from "./routes";

const port = config.get<number>("port");

const app = express();

app.use(express.json());

app.listen(port, async () => {
  logger.info(`Server is running on http://localhost:${port}`);

  routes(app);
});
