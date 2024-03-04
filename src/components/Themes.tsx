"use client"

import { useEffect, useState } from "react";


const BtnThemes = () => {
  const [them, setThem] = useState(() => {
      if(typeof window !== "undefined"){
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        if(mediaQuery.matches === true){
          return false
        } else {
          return true
      }
    }
    return true
  })

  useEffect(()=>{

    if(them === false){
      document.querySelector("html")?.classList.add("dark")
    } 
    if(them === true) {
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