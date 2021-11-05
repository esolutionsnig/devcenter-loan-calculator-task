import { Request, Response } from "express";
import { CalculateLoanInput } from "../schema/loan.schema";
import { calculateLoan } from "../service/loan.service";
import logger from "../utils/logger";

export async function calculateLoanHandler(
  req: Request<{}, {}, CalculateLoanInput["body"]>,
  res: Response
) {
  try {
    const loan = await calculateLoan(req.body);
    return res.send(loan);
  } catch (err: any) {
    logger.error(err);
    return res.status(409).send(err.message);
  }
}
