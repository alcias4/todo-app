import { prisma } from "@/lib/prisma";

import { NextRequest, NextResponse } from "next/server";






export async function POST (request:NextRequest) {

  const data = await request.json()
  const  res =await prisma.user.findUnique({
    where: {
      email:data.email,
      password:data.password
    }
  })
  if (res) {
    const listTask = await prisma.nota.findMany({
      where: {
        notaId: Number(res.id)
      }
    })

    const {name, email, id} = res
    return NextResponse.json({user: {id,name, email} , tasks: listTask})
    
  } else {
    
    return NextResponse.json(res)
  }

}