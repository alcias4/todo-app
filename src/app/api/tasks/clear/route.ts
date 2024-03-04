import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"



export async function DELETE (request:NextRequest) {
  const data =await request.json()

  const res = await prisma.nota.deleteMany({
    where:{
      notaId:data,
      status:true
    }
  })

  const qu = await prisma.nota.findMany({
    where:{
      notaId:data,
    }
  })

  return NextResponse.json(qu)
  
}
