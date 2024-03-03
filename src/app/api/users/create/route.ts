import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";



export async function POST (request: NextRequest){
  const {name, email, password} =await request.json()

  const res =await prisma.user.findUnique({
    where: {
      email: email
    }
  })

  if (res === null){
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password
      }
    })
    return NextResponse.json(newUser)
  } else {
    return NextResponse.json({user: "user exist"})
  }
}