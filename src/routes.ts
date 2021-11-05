import { Express, Request, Response } from "express";
import { calculateLoanHandler } from "./controller/loan.controller";
import validate from "./middleware/validate-resource";
import { calculateLoanSchema } from "./schema/loan.schema";

function routes(app: Express) {
  app.post("/", validate(calculateLoanSchema), calculateLoanHandler);
}

export default routes;
