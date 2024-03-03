
import TasksList from "@/components/TasksList";



const Task = () => {
  
  return (
  <div className="w-[90%]  flex justify-center text-white absolute top-[150px] flex-col gap-10 ">
    <form className="dark:bg-[#25273c]">
      <input type="text" placeholder="Create a new todo..."/>
    </form>
    <TasksList />  

  </div>  
  )
}

export default Task;