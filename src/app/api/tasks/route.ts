import { prisma } from "@/lib/prisma"
import { TaskCom } from "@/type/types"


import { NextRequest, NextResponse } from "next/server"


interface Data {
  text: string,
  status: boolean,
  noteId: number
}


export async function POST (request:NextRequest) {
  const data:Data =await request.json()
  
  const res = await prisma.nota.create({
    data: {
      text: data.text,
      status: data.status,
      notaId: data.noteId
    }
  })
  
  const list = await prisma.nota.findMany({
    where:{
      notaId:data.noteId
    }
  })

  return NextResponse.json(list)
}


export async function DELETE (request:NextRequest) {
  const data =await request.json()
  
  const res = await prisma.nota.delete({
    where:{
      id:data
    }
  })
  
  const da = await prisma.nota.findMany({
    where: {
      notaId: res.notaId
    }
  })
  return NextResponse.json(da)
}


export async function PUT (request:NextRequest) {
  const data =await request.json()

  await prisma.nota.deleteMany({
    where:{
      notaId: data.noteId
    }
  })

  await prisma.nota.createMany({
    data:data
  })
  
  const res = await prisma.nota.findMany({
    where:{
      notaId: data.noteId
    }
  })
  return NextResponse.json(res)
}