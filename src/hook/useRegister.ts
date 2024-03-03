import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"



const useRegister = () => {
  const [dataRegister, setRegister] = useState({
    name:"",
    email: "",
    password: ""
  })

  const [error, setError] = useState(false)
  const router = useRouter()
  const handleOnSubmit =async (e:FormEvent) => {
    e.preventDefault()

    const res = await fetch("/api/users/create", {
      method: "POST",
      body: JSON.stringify(dataRegister),
      headers: {
        "Content-type": "application/json"
      }
    })

    const response = await res.json()
    if(response.user){
      setError(true)
    }

  }

  return {handleOnSubmit, setRegister, error, router, dataRegister}
}

export default useRegister;