"use client"

import useRegister from "@/hook/useRegister";



const Register = () => {
  const {handleOnSubmit,setRegister,error,router,dataRegister} = useRegister()
  return (
  <div className="w-full flex justify-center">
      <form className="w-80 flex flex-col gap-2 dark:bg-[#25273c] p-5 rounded" onSubmit={handleOnSubmit}>
      <h2>Register</h2>
      {error ? <span>Error email exist</span> : null}
            <label htmlFor="name">Name</label>
      <input className="dark:bg-[#181824] dark:text-white p-2 outline-none" type="text" autoComplete="off" id="name" onChange={(e)=> setRegister({...dataRegister, name:e.target.value})} />
      <label htmlFor="email">Email</label>
      <input className="dark:bg-[#181824] dark:text-white p-2 outline-none" type="text" autoComplete="off" id="email" onChange={(e)=> setRegister({...dataRegister, email:e.target.value})} />
      <label htmlFor="pass">Password</label>
      <input className="dark:bg-[#181824] dark:text-white p-2 outline-none"   autoComplete="off" type="text" id="pass" onChange={(e)=> setRegister({...dataRegister, password:e.target.value})} />
      <button>Create</button>
      <button onClick={() => router.push("/")}>Login in</button>
    </form>
  </div>
  )
}

export default Register;