"use client"

import { useEffect, useState } from "react";


const BtnThemes = () => {
  const [them, setThem] = useState(true)

  useEffect(()=>{
    if(them === false){
      document.querySelector("html")?.classList.add("dark")
    } else {
      document.querySelector("html")?.classList.remove("dark")
    }
  },[them])

 return (
  <button onClick={() => setThem(!them)}>
    <img src={!them?"/img/icon-sun.svg": "/img/icon-moon.svg"} alt="icon svg" />
  </button>
 )
}

export default BtnThemes;