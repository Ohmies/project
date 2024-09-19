"use server";

import { LoginFormSchema } from "../validations/auth.validations";

export async function loginAction(username: string, pin: string) {
    try {
    // Validate input data
    const validData = LoginFormSchema.safeParse({ username, pin });
    if (!validData.success) {
      return { success: false, error: "Invalid data." };
    }
    } catch (error) {
        console.error("Error updating cash details:", error);
        return false; 
      }
}