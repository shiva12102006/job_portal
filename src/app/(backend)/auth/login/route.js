import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    // Manual Validation
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const users = await prisma.users.findUnique({
      where: { email },
    });

    if (!users) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      users.password
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { userId: users.id ,role :users.role},
      process.env.JWT_SECRET || "defaultsecret",
      { expiresIn: "1d" }
    );

    setcookie
    
    return NextResponse.json({
      message: "Login successful",
      token,
    role: users.role,
    });

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}
