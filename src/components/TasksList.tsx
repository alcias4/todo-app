

import { Data } from "@/type/types"
import { useRouter } from "next/navigation"
import { useState } from "react"


interface  Props {
  listTask:Data
  deleteNote:(id:number) => void
  notesActives:() => void
  noteCompleted:() => void
  allNotes:()=> void
}


const TasksList: React.FC<Props>  = ({listTask,deleteNote, notesActives, noteCompleted, allNotes}) => {

  const router = useRouter()
  const [check, setCheck ] = useState(false)
  
  return (
    <ul className="dark:bg-[#25273c] flex flex-col gap-2 rounded relative">
      {
        listTask?.map((e) => (
          <li className="w-full px-4 p-2 border-b-[1px] border-gray-400/50 font-light flex gap-4 items-center" key={e.id}>
            <button className={`w-[20px] h-[20px] flex justify-center items-center border-[1px] border-gray-400/50 rounded-full ${e.status?"bg-gradient-to-r from-cyan-500 to-blue-500":""}`} onClick={() => setCheck(!check)}>
            {
              e.status?<img className="w-[60%] h-[60%]" src="/img/icon-check.svg" alt="icon check" />:
              null
            }
            </button>
            <p className={`${e.status?"line-through opacity-65":""}`}>{e.text}</p>
            <button onClick={() => deleteNote(e.id)} type="button" className="h-full flex items-center">
              <img className="absolute right-4" src="/img/icon-cross.svg" alt="cross x" />
            </button>
          </li>
        ))
      }
      <div className="w-full font-light text-white/55 p-2 flex justify-between px-4">
        <button>{listTask?.length} item left</button>
        <button>Clear Completed</button>
      </div>

      
      <section className="absolute flex p-2 w-full rounded -bottom-[60px] dark:bg-[#25273c] justify-center gap-5 dark:text-[#555675] font-bold ">
        <button type="button" onClick={allNotes}  className="text-[#4f74ca] dark:hover:text-white ease-in duration-200">All</button>
        <button type="button" onClick={notesActives} className="dark:hover:text-white ease-in duration-200">Active</button>
        <button type="button" onClick={noteCompleted} className="dark:hover:text-white ease-in duration-200">Completed</button>
        <button onClick={() => {
          window.localStorage.clear()
          router.push('/')
        }} className="dark:hover:text-white ease-in duration-200">Exit</button>
      </section>
    </ul>
  )
}


export default TasksList;


