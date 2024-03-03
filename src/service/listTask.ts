"use server"
import { prisma } from "@/lib/prisma"

interface Data {
  id: number
  text: string
  status:boolean
}




export const listTask = async (id:string) => {

  const res = await prisma.nota.findMany({
    where:{
      notaId: Number(id)
    }
  })
  const  json:Data[] = res
  return json
}