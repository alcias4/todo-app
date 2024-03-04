import { useRouter } from "next/navigation"
import { FormEvent, useEffect, useState } from "react"



const useRegister = () => {
  const [dataRegister, setRegister] = useState({
    name:"",
    email: "",
    password: ""
  })

  const [error, setError] = useState({status: false, text:""})
  const router = useRouter()
  const handleOnSubmit =async (e:FormEvent) => {
    e.preventDefault()
    if (dataRegister.email === "" || dataRegister.name === "" || dataRegister.password === ""){
      setError({text: "Empty input!", status:true})
      return
    }

    const res = await fetch("/api/users/create", {
      method: "POST",
      body: JSON.stringify(dataRegister),
      headers: {
        "Content-type": "application/json"
      }
    })

    const response = await res.json()
    if(response.user){
      setError({text:"email exists", status:true})
    }

  }

  useEffect(()=> {
    setError({text:"", status:false})
  }, [dataRegister])

  return {handleOnSubmit, setRegister, error, router, dataRegister,setError}
}

export default useRegister;