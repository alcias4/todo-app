"use client"
import useDate from "@/hook/useData"
import { useRouter } from "next/navigation"
import { useState } from "react"



const TasksList = () => {
  const {task} = useDate()
  const router = useRouter()
  const [check, setCheck ] = useState(false)
  return (
    <ul className="dark:bg-[#25273c] flex flex-col gap-2 rounded relative">
      {
        task?.map((e) => (
          <li className="w-full px-4 p-2 border-b-[1px] border-gray-400/50 font-light flex gap-4 items-center" key={e.id}>
            <button className={`w-[20px] h-[20px] flex justify-center items-center border-[1px] border-gray-400/50 rounded-full ${check?"bg-gradient-to-r from-cyan-500 to-blue-500":""}`} onClick={() => setCheck(!check)}>
            {
              check?<img className="w-[60%] h-[60%]" src="/img/icon-check.svg" alt="icon check" />:
              null
            }
            </button>
            <p>{e.text}</p>
            <img className="absolute right-4 cursor-pointer" src="/img/icon-cross.svg" alt="cross x" />
          </li>
        ))
      }
      <div className="w-full font-light text-white/55 p-2 flex justify-between px-4">
        <button>{task?.length} item left</button>
        <button>Clear Completed</button>
      </div>

      
      <section className="absolute flex p-2 w-full rounded -bottom-[60px] dark:bg-[#25273c] justify-center gap-5 dark:text-[#555675] font-bold">
        <button className="text-[#4f74ca]">All</button>
        <button>Active</button>
        <button>Completed</button>
        <button onClick={() => {
          window.localStorage.clear()
          router.push('/')
        }}>Exit</button>
      </section>
    </ul>
  )
}


export default TasksList;


