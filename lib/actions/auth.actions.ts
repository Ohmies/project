"use server";

import db from "@/db";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { users } from "@/db/schema";
import { LoginFormSchema } from "../validations/auth.validations";

export async function loginAction(username: string, pin: string) {
  // Validate input data
  const validationResult = LoginFormSchema.safeParse({ username, pin });
  if (!validationResult.success) {
    return { success: false, error: "Invalid data." };
  }

  try {

    // Find user by username
    const user = await db
      .select()
      .from(users)
      .where(eq(users.username, username))
      .limit(1)
      .execute();

    if (user.length > 0) {
      // User exists, check password
      const passwordsMatch = await bcrypt.compare(pin, user[0].pin);
      if (passwordsMatch) {
        return { success: true, user: user[0] }; // Return user data if passwords match
      } else {
        return { success: false, error: "Invalid username or pin." }; // Incorrect password
      }
    }
    
    return { success: false, error: "User not found." }; // User not found
  } catch (error) {
    console.error("Error during login action:", error);
    return { success: false, error: "An error occurred during login." };
  }
}