import * as z from "zod";

export const LoginFormSchema = z.object({
  username: z.string().min(1, { message: "Usesrname is required" }),
  pin: z.string().min(1, { message: "Password is required" }),
});

export const RegisterFormSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  pin: z.string().min(1, { message: "Password is required" }),
  email: z.string().email({ message: "Invalid email address" }).min(1, { message: "Email is required" }), // เพิ่มอีเมล
});