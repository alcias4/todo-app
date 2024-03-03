import { FormEvent, useEffect, useState } from "react"




const useTask = (id:number,setRefresh:(n:boolean)=> void,refresh:boolean ) => {
  
  const [create , setCreate ] = useState({text: "",status:false,  noteId:id})
  const [check, setCheck ] = useState(false)

  const handleOnSubmit =async (e:FormEvent<HTMLFormElement> ) => {
    e.preventDefault()

    const res = await fetch("/api/tasks",{
      method:"POST",
      body: JSON.stringify(create),
      headers: {
        "Content-type": "application/json"
      }
    })
  
    const response = await res.json()
    
    if(response){
      localStorage.setItem("tasks", JSON.stringify(response))
      setCreate({text: "",status:false,  noteId:id})
      setCheck(false)
    }
    setRefresh(!refresh)
  }

  useEffect(()=> {
    const n ={
      ...create,
      noteId: id
    }
    setCreate(n)

  },[create.text])

  useEffect(()=> {
    const n ={
      ...create,
      status: check
    }
    setCreate(n)
  },[check])
  
  const handleClick = () => {
    setCheck(!check)
  }

  return {handleClick, handleOnSubmit,setCreate, create, check}
}


export default useTask;