import { FormEvent, useEffect, useState } from "react"
import {useRouter }from "next/navigation"




export const useUser = () => {
  const [data, setData] = useState({email: '', password: ''})
  const [user, setUser] = useState()
  const [tasks, setTasks] = useState()
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
    const jsoRes =await res.json()

    if (jsoRes === null){
      setUser(undefined)
      setTasks(undefined)
      setError({status: false, text: ""})
    } else {
      setUser(jsoRes.user)
      setTasks(jsoRes.tasks)
      router.push("/task")
    }
  }

  useEffect(() => {
    if(data.email === "" || data.password === ""){
      return
    }
    if(user !== undefined){
      window.localStorage.setItem("user",JSON.stringify(user))
      window.localStorage.setItem("tasks",JSON.stringify(tasks))
    } else {
      window.localStorage.setItem("user","")
      window.localStorage.setItem("tasks","")
    }
  },[tasks])

  

  return {setData, handleOnSubmit, data, error}
}