import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"





// export async function POST (request:NextRequest) {
//   const data =await request.json()

//   const res = await prisma.nota.create({
//     data:{
//       text:data.text,
//       notaId:1
//     }
//   })

//   if (res) {

//   }
//   return NextResponse.json(res)
// }
