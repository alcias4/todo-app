"use client"
import CreateTask from "@/components/CreateTask";
import TasksList from "@/components/TasksList";
import useDate from "@/hook/useDate";




const Task = () => {
  const {data,setRefresh,refresh,user,deleteNote, notesActives,allNotes,noteCompleted} = useDate()
  return (
  <div className="w-[90%]  flex justify-center text-white absolute top-[150px] flex-col gap-10 ">
    <CreateTask user={user} set={setRefresh} refresh={refresh}/>
    <TasksList listTask={data} deleteNote={deleteNote} notesActives={notesActives} allNotes={allNotes} noteCompleted={noteCompleted}/>  

  </div>  
  )
}

export default Task;