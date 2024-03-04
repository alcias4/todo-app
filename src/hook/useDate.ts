import { Data, Task, User } from "@/type/types"
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
 
    const dataLocal = JSON.parse(localStorage.getItem("tasks") || "")
    const newDate = dataLocal.filter((e:Task) => {
      return e.id !== id
    })
    
    window.localStorage.setItem("tasks", JSON.stringify(newDate))
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

  const updateStatus =async(id:number) => {
    const da:Data = JSON.parse(localStorage.getItem("tasks") || '')
    const r = da?.find((e) => e.id === id)
    
    if(typeof r?.status !== 'undefined'){
      r.status = !r.status
    }
    
    window.localStorage.setItem("tasks", JSON.stringify(da))
    setRefresh(!refresh)
  }

  
    
  return {user,setRefresh, refresh,data, deleteNote, notesActives,noteCompleted, allNotes, updateStatus}
}

export default useDate;