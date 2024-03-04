import { Data, User } from "@/type/types"
import { useState } from "react"



interface Props {
  refresh:boolean
  setRefresh:(n:boolean)=> void
}


const useClean = ({refresh, setRefresh}:Props) => {
  const [loading, setLoading] = useState(false)

  const cleanDelete =async () => {
    const m:User = JSON.parse(localStorage.getItem("user") || "")
    const res = await fetch("/api/tasks/clear",{
      method:"DELETE",
      body: JSON.stringify(m.id),
      headers: {
        "Content-type": "application/json"
      }
    })

    const n = await res.json()
    localStorage.setItem("tasks",JSON.stringify(n))
    setRefresh(!refresh)
  }

  const saveChances =async () => {
    try{
      setLoading(true)
      const n = JSON.parse(localStorage.getItem("tasks") || "")
      const res = await fetch("/api/tasks",{
        method:"PUT",
        body: JSON.stringify(n),
        headers: {
          "Content-type": "application/json"
        }
      })
      const  response = await res.json()
      console.log(response)
      localStorage.setItem("tasks",JSON.stringify(response))
      setRefresh(!refresh)
    } finally {
      setLoading(false)
    }
  }
  return {cleanDelete, saveChances, loading}
}

export default useClean;