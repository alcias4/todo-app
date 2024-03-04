"use client"
import { useUser } from "@/hook/useUser"
import { useRouter } from "next/navigation"
import { Cross } from "./icon/Icons"

const Login = () => {
  const router  = useRouter()
  const {setData, handleOnSubmit,data,error,setError} = useUser()
  
  return (
    <form className="w-[90%] flex flex-col dark:bg-[#25273c] p-5 rounded-lg relative bg-[#ffffff] shadow-lg" onSubmit={handleOnSubmit}>
    {/* <span className={`${!error.status? "hidden": null} flex gap-2 text-2xl items-center text-[#ff0000]`}>
      <Cross status={false}/> 
      {error.text}
    </span> */}
    <label className="labe" htmlFor="email">Email</label>
    <input className="input" type="text" autoComplete="off" id="email" onChange={(e) => setData({...data, email:e.target.value})}/>
    <label className="label" htmlFor="pass">Password</label>
    <input className="input"   autoComplete="off" type="text" id="pass" onChange={(e) => setData({...data, password:e.target.value})}/>
    <div className="flex justify-center gap-10 mt-5 font-bold">
      <button className="dark:hover:text-white/50 ease-in duration-200 hover:text-black/65" >Login in</button>
      <button className="dark:hover:text-white/50 ease-in duration-200 hover:text-black/65 "  onClick={()=> {
        setError({status:false, text:""})
        router.push("/register")
        
      }
      }>Register</button>
    </div>
  </form>
  )
}

export default Login;