
import BtnThemes from "./Themes";



const Nav = () => {
  return (
  <header className="nav w-full flex justify-center h-[250px]">
    <div className="w-[90%] flex h-full items-center justify-between pb-16 desk:w-[750px] desk:px-16">
      <h1 className="text-5xl uppercase text-white">Todo</h1>
      <BtnThemes /> 
    </div>
  </header>
  )
}

export default Nav;