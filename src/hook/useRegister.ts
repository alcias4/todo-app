import { useRouter } from "next/navigation"
import { FormEvent, useEffect, useState } from "react"



const useRegister = () => {
  const [dataRegister, setRegister] = useState({
    name:"",
    email: "",
    password: ""
  })

  const [error, setError] = useState({status: false, text:""})
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const handleOnSubmit =async (e:FormEvent) => {
    e.preventDefault()
    if (dataRegister.email === "" || dataRegister.name === "" || dataRegister.password === ""){
      setError({text: "Empty input!", status:true})
      return
    }
    try {
      setLoading(true)
      const res = await fetch("/api/users/create", {
        method: "POST",
        body: JSON.stringify(dataRegister),
        headers: {
          "Content-type": "application/json"
        }
      })

      const response = await res.json()
      router.push("/")
      if(response.user){
        setError({text:"email exists", status:true})
      }

    } finally {
      setLoading(false)
    }
  }

  useEffect(()=> {
    setError({text:"", status:false})
  }, [dataRegister])

  return {handleOnSubmit, setRegister, error, router, dataRegister,setError, loading}
}

export default useRegister;