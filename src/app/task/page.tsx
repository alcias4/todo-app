"use client"
import CreateTask from "@/components/CreateTask";
import TasksList from "@/components/TasksList";
import useClean from "@/hook/useClean";
import useDate from "@/hook/useDate";




const Task = () => {
  const {data,setRefresh,refresh,user,deleteNote, notesActives,allNotes,noteCompleted, updateStatus} = useDate()
  const {cleanDelete} = useClean({refresh, setRefresh})
  return (
  <div className="w-[90%] desk:w-[750px] desk:px-16   flex justify-center dark:text-white absolute top-[150px] flex-col gap-5 ">
    <CreateTask user={user} set={setRefresh} refresh={refresh}/>
    <TasksList listTask={data} deleteNote={deleteNote} notesActives={notesActives} allNotes={allNotes} noteCompleted={noteCompleted} updateStatus={updateStatus} cleanDelete={cleanDelete}/>  

  </div>  
  )
}

export default Task;