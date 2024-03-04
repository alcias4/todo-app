import { FormEvent, useState } from "react"
import {useRouter }from "next/navigation"


interface credentials {
  email:string,
  password:string
}

export const useUser = () => {
  const [data, setData] = useState<credentials>({email: '', password: ''})
  const [error, setError] = useState({status:false, text:""})
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleOnSubmit = async (e:FormEvent) => {
    e.preventDefault()
    if(data.email === "" || data.password === ""){
      setError({status: true, text: "empty"})
      return
    }
    
    try {
      setLoading(true)
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
    } finally {
      setLoading(false)
    }
  }



  

  return {setData, handleOnSubmit, data, error, setError,loading}
}