"use server";

import db from "@/db";
import bcrypt from "bcryptjs";
import { eq, or } from "drizzle-orm"; 
import { users } from "@/db/schema";
import { RegisterFormSchema } from "../validations/auth.validations";

interface RegisterResult {
  success: boolean;
  error?: string;
  user?: any; // ระบุประเภทที่เหมาะสมสำหรับผู้ใช้ใหม่ถ้าต้องการ
}

// ฟังก์ชันสำหรับการสมัครสมาชิก
export async function registerAction(username: string, pin: string, email: string): Promise<RegisterResult> {
  // Validate input data
  const validationResult = RegisterFormSchema.safeParse({ username, pin, email });
  if (!validationResult.success) {
    return { success: false, error: validationResult.error.format()._errors[0] }; // ส่งกลับข้อผิดพลาดที่แท้จริง
  }  

  try {
    // Check if user already exists by username or email
    const existingUser = await db
      .select()
      .from(users)
      .where(or(eq(users.username, username), eq(users.email, email))) // ใช้ or กับ eq
      .limit(1)
      .execute();

    if (existingUser.length > 0) {
      return { success: false, error: "Username or email already exists." }; // ชื่อผู้ใช้หรืออีเมลมีอยู่แล้ว
    }

    // Hash the provided pin
    const hashedPin = await bcrypt.hash(pin, 10);

    const newUser = {
      username,
      pin: hashedPin,
      email, // เพิ่มอีเมล
      isManager: false, // หรือค่าเริ่มต้นที่จำเป็นอื่น ๆ
      // เพิ่มค่าตั้งต้นสำหรับคอลัมน์ที่จำเป็นอื่น ๆ ที่นี่
    };

    const insertResult = await db
      .insert(users)
      .values(newUser)
      .returning() // ตรวจสอบว่าฐานข้อมูลสนับสนุนการทำงานนี้
      .execute();

    if (insertResult.length > 0) {
      return {
        success: true,
        user: insertResult[0], // คืนค่าผู้ใช้ใหม่ที่สร้าง
      };
    }

    return { success: false, error: "Failed to create user." }; // ข้อผิดพลาดในการสร้างผู้ใช้
  } catch (error) {
    console.error("Error during registration action:", error);
    return { success: false, error: "An error occurred during registration." };
  }
}
