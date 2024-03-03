"use client"
import { useUser } from "@/hook/useUser"
import { useRouter } from "next/navigation"
import { Cross } from "./icon/Icons"

const Login = () => {
  const router  = useRouter()
  const {setData, handleOnSubmit,data,error} = useUser()
  
  return (
    <form className="w-[90%] flex flex-col gap-2 dark:bg-[#25273c] p-5 rounded relative" onSubmit={handleOnSubmit}>
    <span className={`${!error.status? "hidden": null} flex gap-2 text-2xl items-center text-[#ff0000]`}>
      <Cross status={false}/> 
      {error.text}
    </span>
    <label htmlFor="email">Email</label>
    <input className="dark:bg-[#181824] dark:text-white p-2 outline-none rounded-lg" type="text" autoComplete="off" id="email" onChange={(e) => setData({...data, email:e.target.value})}/>
    <label htmlFor="pass">Password</label>
    <input className="dark:bg-[#181824] dark:text-white p-2 outline-none rounded-lg"   autoComplete="off" type="text" id="pass" onChange={(e) => setData({...data, password:e.target.value})}/>
    <div className="flex justify-center gap-10 mt-5 font-bold">
      <button >Login in</button>
      <span className="cursor-pointer" onClick={()=> router.push("/register")}>Register</span>
    </div>
  </form>
  )
}

export default Login;