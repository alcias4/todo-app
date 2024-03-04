"use client"

import Loading from "@/components/Loading";
import useRegister from "@/hook/useRegister";
import { useRouter } from "next/navigation";



const Register = () => {
  const {handleOnSubmit,setRegister,error,dataRegister,setError,loading} = useRegister()
  const router = useRouter()
  return (
  <div className="w-full flex items-center justify-center absolute top-[150px] desk:w-[700px] ">
    {
      !loading?  <form className="w-[90%] h-auto flex flex-col dark:bg-[#25273c] p-5 rounded bg-[#ffffff] shadow-lg" onSubmit={handleOnSubmit}>
      <h2 className="w-full text-center font-bold text-xl">Register</h2>
      {/* {error.status ? <span className="text-red-600">{error.text}</span> : null} */}
            <label className="label" htmlFor="name">Name</label>
      <input className="input" type="text" autoComplete="off" id="name" onChange={(e)=> setRegister({...dataRegister, name:e.target.value})} />
      <label className="label" htmlFor="email">Email</label>
      <input className="input" type="text" autoComplete="off" id="email" onChange={(e)=> setRegister({...dataRegister, email:e.target.value})} />
      <label className="label" htmlFor="pass">Password</label>
      <input className="input"   autoComplete="off" type="text" id="pass" onChange={(e)=> setRegister({...dataRegister, password:e.target.value})} />
      <div className="mt-5 w-full flex justify-center gap-16 ">
        <button className="ease-in duration-200 hover:opacity-60">Create</button>
        <button className="ease-in duration-200 hover:opacity-60" onClick={() => {
          setError({status:false, text:""})
          router.push("/")
        }}>Login in</button>
      </div>
    </form>:
    <Loading />
    }
  </div>
  )
}

export default Register;