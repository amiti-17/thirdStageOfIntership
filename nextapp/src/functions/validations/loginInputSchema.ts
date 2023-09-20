import { z } from 'zod';

export const loginInputSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }),
  password: z.string()
    .trim()
    .min(8, { message: "Must be 8 or more characters long" })
    .max(256, { message: "Must be 256 or less characters long" }),
}).required();
