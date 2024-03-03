import { FormEvent, useState } from "react"
import {useRouter }from "next/navigation"




interface Data {
  id: number
  text: string
  status:boolean
  noteId: number
}

interface person {
  id: number
  name: string
  email: string
}

interface credentials {
  email:string,
  password:string
}

export const useUser = () => {
  const [data, setData] = useState<credentials>({email: '', password: ''})
  const [error, setError] = useState({status:false, text:""})


  const router = useRouter()

  const handleOnSubmit = async (e:FormEvent) => {
    e.preventDefault()
    if(data.email === "" || data.password === ""){
      setError({status: true, text: "empty"})
      return
    }
    
    const res = await fetch("/api/users",{
      method:"POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    })
    const js =await res.json()
    if(js){
      const ta = js.tasks
      const user = js.user
      localStorage.setItem("tasks", JSON.stringify(ta))
      localStorage.setItem("user", JSON.stringify(user))
      router.push('/task')
    }
  }



  

  return {setData, handleOnSubmit, data, error}
}