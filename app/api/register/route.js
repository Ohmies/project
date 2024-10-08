import { NextResponse } from "next/server";

export default async function POST(req) {
    try {
        const { username, email, pin } = await req.json();
        console.log("Name", username);
        console.log("Email", email);
        console.log("Password", pin);

        return NextResponse.json({message: "User registered successfully"},{status: 201});

    } catch (error) {
        return NextResponse.error({message: "An error occurred"},{status: 500});
    }
}