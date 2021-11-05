import { AnyZodObject } from "zod";
import { Request, Response } from "express";

const validate =
  (schema: AnyZodObject) => (req: Request, res: Response, next: any) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (err: any) {
      return res.status(400).send(err.errors);
    }
  };

export default validate;
