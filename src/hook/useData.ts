import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface Data {
  id: number
  text: string
  noteId: number
}



const useDate = () => {
  const [task , setTask] =  useState<Data[] | [] >()

  const router =  useRouter()
  useEffect(() => {
    if(localStorage.getItem("user") === ''){
      router.push("/")
    } else{
      setTask(JSON.parse(window.localStorage.getItem("tasks") || '[]'))
    }
  }, [])

  return {task}
}


export default useDate;