"use client"
import useTask from "@/hook/useTask";
import { User } from "@/type/types";

interface Props {
  user: User
  set:(n:boolean) => void
  refresh:boolean
}


const CreateTask: React.FC<Props> = ({user,set,refresh }) => {
  const {handleClick, handleOnSubmit, create,setCreate,check} = useTask(user.id, set, refresh)
  return (
    <form className="dark:bg-[#25273c] bg-[#ffffff] flex gap-4 p-4 rounded shadow-lg" onSubmit={handleOnSubmit}>
      <button type="button" className={`w-[20px] h-[20px] flex justify-center items-center border-[1px] border-gray-400/50 rounded-full ${check?"bg-gradient-to-r from-cyan-500 to-blue-500":""}`} onClick={handleClick}>
        {
          check?<img className="w-[60%] h-[60%]" src="/img/icon-check.svg" alt="icon check" />:
          null
        }
    </button>
    <input className="bg-transparent outline-none w-[90%]" type="text" placeholder="Create a new todo..." onChange={(e) => setCreate({...create, text: e.target.value})} value={create.text}/>
  </form>
  )
}

export default CreateTask;