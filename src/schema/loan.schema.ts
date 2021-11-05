import { number, object, string, TypeOf } from "zod";

export const calculateLoanSchema = object({
  body: object({
    amount: number({
      required_error: "The amount is required",
    }),
    duration: number({
      required_error: "The number of months is required",
    })
      .min(3, "Number of months to small. Should be 3 months minimum")
      .max(24, "Number of months too large. Should be 24 months maximum"),
    percentage: number({
      required_error: "The interest percentage is required",
    }),
  }),
});

export type CalculateLoanInput = TypeOf<typeof calculateLoanSchema>;
