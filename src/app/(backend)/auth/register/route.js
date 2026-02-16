import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password,username, mobile ,role} = body;

    // Manual Validation
    if (!name || !username|| !email || !password||! mobile || !role) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    if (name.length < 3) {
      return NextResponse.json(
        { message: "Name must be at least 3 characters" },
        { status: 400 }
      );
    }
    if (username.length < 3) {
      return NextResponse.json(
        { message: "Username must be at least 3 characters" },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }
   if (!mobile || mobile.length !== 10 || !/^\d+$/.test(mobile)) {
  return NextResponse.json(
    { message: "Mobile number must be exactly 10 digits" },
    { status: 400 }
  );
}

if (!role) {
  return NextResponse.json(
    { message: "Role is required" },
    { status: 400 }
  );
}
const allowedPublicRoles = ["employee", "employer"];

if (!allowedPublicRoles.includes(role)) {
  return NextResponse.json(
    { message: "Invalid role selection" },
    { status: 400 }
  );
}


    // Check existing user
    const existingUser = await prisma.users.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.users.create({
      data: {
        name,
        email,
        username,
        mobile,
        password: hashedPassword,
        role,
      },
    });

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
        
      { message: "Server error" },
      { status: 500 }
    );
  }
}
