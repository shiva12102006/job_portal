import { prisma } from "@/lib/prisma";

export async function GET() {
  const users = await prisma.users.findMany();
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req) {
  const body = await req.json();
  console.log("DATABASE_URL =>", process.env.DATABASE_URL);

  const user = await prisma.users.create({
    data: {
      name: body.name,
      username: body.username,
      email: body.email,
      password: body.password,
    },
  });
  return new Response(JSON.stringify(user), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}