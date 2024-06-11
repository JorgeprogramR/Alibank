import { z } from "zod";

export const createAccountSchema = z.object({
  accountType: z.string({
    required_error: "El tipo de cuenta es requerido",
  }),
  balance: z.string({
    required_error: "Es necesario saber el monto de la cuenta",
  }),
});
