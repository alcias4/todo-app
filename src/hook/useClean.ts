import { Data, User } from "@/type/types"



interface Props {
  refresh:boolean
  setRefresh:(n:boolean)=> void
}


const useClean = ({refresh, setRefresh}:Props) => {
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
  return {cleanDelete}
}

export default useClean;