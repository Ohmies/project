"use server";

import { LoginFormSchema } from "../validations/auth.validations";

export async function loginAction(username: string, pin: string) {
    try {
    // Validate input data
    const validData = LoginFormSchema.safeParse({ username, pin });
    if (!validData.success) {
      return { success: false, error: "Invalid data." };
    }

    const data = "MemberName-1"

    return {
        success: true,
        data: data
    }
    
    } catch (error) {
        console.error("Error updating cash details:", error);
        return false; 
      }
}