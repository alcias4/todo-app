import { Data, User } from "@/type/types"
import { useEffect, useState } from "react"







const useDate = () => {
  const [data, setData] = useState<Data>([])
  const [user,setUser] = useState<User>({name:"",email:"",id:Number("")})
  const [refresh , setRefresh] = useState<boolean>(false)
  useEffect(() => {
    const n = localStorage.getItem("tasks")
    setData(JSON.parse(n || "[]"))

    const m = localStorage.getItem("user")
    setUser(JSON.parse(m || "{}"))
    
  },[])
  
  useEffect(() => {
    const n = localStorage.getItem("tasks")
    setData(JSON.parse(n || "[]"))
  },[refresh])

  const deleteNote =async (id:number) => {
    const res = await fetch("/api/tasks",{
      method:"DELETE",
      body: JSON.stringify(id),
      headers: {
        "Content-type": "application/json"
      }
    })
    const js = await res.json()
    window.localStorage.setItem("tasks", JSON.stringify(js))
    setRefresh(!refresh)
  }


  const notesActives = () => {
    const n = localStorage.getItem("tasks")
    const m:Data = (JSON.parse(n || "[]"))
    const  result = m?.filter((e)=> {
      return e.status === false
    })
    setData(result)
  }

  const noteCompleted = () => {
    const n = localStorage.getItem("tasks")
    const m:Data = (JSON.parse(n || "[]"))
    const  result = m?.filter((e)=> {
      return e.status === true
    })
    
    setData(result)
  }
  
  const allNotes = () => {
    const n = localStorage.getItem("tasks")
    const m:Data = (JSON.parse(n || "[]"))
    setData(m)
  }
  return {user,setRefresh, refresh,data, deleteNote, notesActives,noteCompleted, allNotes}
}

export default useDate;