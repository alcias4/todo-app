

import { Data } from "@/type/types"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


interface  Props {
  listTask:Data
  deleteNote:(id:number) => void
  notesActives:() => void
  noteCompleted:() => void
  allNotes:()=> void
  updateStatus:(id:number) => void
  cleanDelete:()=> void
  saveChances:() => void
  loading:boolean
}


const TasksList: React.FC<Props>  = ({listTask,deleteNote, notesActives, noteCompleted, allNotes, updateStatus, cleanDelete, saveChances,loading}) => {

  const router = useRouter()
  const [check, setCheck ] = useState(false)
  const reverse  = ():Data => {
    const n:Data = []
    listTask.forEach(ele => {
      n.unshift(ele)
    })
    return n
  }

  return (
    <ul className="dark:bg-[#25273c] bg-[#ffffff] flex flex-col gap-2 rounded relative shadow-lg">
      {
        !loading?<>
          {
          reverse().map((e) => (
            <li className="w-full px-4 p-2 border-b-[1px] border-gray-400/50 flex font-bold gap-4 items-center" key={e.id}>
              <button className={`w-[20px] h-[20px] flex justify-center items-center border-[1px] border-gray-400/50 rounded-full ${e.status?"bg-gradient-to-r from-cyan-500 to-blue-500":""}`} onClick={() => {
                setCheck(!check)
                updateStatus(e.id)
              }}>
              {
                e.status?<img className="w-[60%] h-[60%]" src="/img/icon-check.svg" alt="icon check" />:
                null
              }
              </button>
              <p className={`${e.status?"line-through opacity-65":""} pointer-events-none ease-in duration-200`}>{e.text}</p>
              <button onClick={() => deleteNote(e.id)} type="button" className="h-full flex items-center">
                <img className="absolute right-4" src="/img/icon-cross.svg" alt="cross x" />
              </button>
            </li>
          ))
        }
        </>:<div className="w-full px-4 p-2 border-b-[1px] border-gray-400/50 flex font-bold gap-4 items-center animate-pulse">Save Changes ....</div>
      }
      <div className="w-full text-black/45 font-bold dark:text-white/55 p-2 flex justify-between px-4">
        <p className="pointer-events-none">{listTask?.length} item left</p>
        <button className="dark:hover:text-white ease-in duration-200 hover:text-black/65" type="button" onClick={cleanDelete}>Clear Completed</button>
      </div>

      
      <section className="absolute flex p-2 w-full rounded -bottom-[60px] dark:bg-[#25273c] justify-end gap-5 dark:text-[#555675] font-bold bg-[#ffffff] shadow-lg desk:justify-center">
      <button onClick={() => saveChances()} type="button"  className="text-white ease-in duration-200  hover:bg-opacity-50 left-[12px] absolute border bg-[#4f74ca] border-sky-900 rounded-lg px-2 " >Save</button>
        <button type="button" onClick={allNotes}  className="text-[#4f74ca]  dark:hover:text-white ease-in duration-200 hover:text-opacity-50">All</button>
        <button type="button" onClick={notesActives} className="dark:hover:text-white ease-in duration-200 hover:text-black/65">Active</button>
        <button type="button" onClick={noteCompleted} className="dark:hover:text-white ease-in duration-200 hover:text-black/65">Completed</button>
        <button onClick={() => {
          window.localStorage.clear()
          router.push('/')
        }} className="dark:hover:text-white ease-in duration-200 hover:text-black/65 mr-2 desk:mr-0">Exit</button>
      </section>
    </ul>
  )
}


export default TasksList;


