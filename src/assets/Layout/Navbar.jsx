import React, { useState } from 'react'
import Display from '../Components/Display'



export default function Navbar() {
 let [open, setOpen] = useState(false)


  
  return (
    <nav className=' absolute justify-between items-center h-1/6 md:absolute w-full'>
        <img className=' w-15 h-14 absolute top-5 left-5 cursor-pointer' src="./images/Menu.png" alt=""  onClick={()=>setOpen(true)}/>
        <p className="absolute top-5 right-5 text-gray-50 text-[40px] font-extrabold text-center cursor-pointer"> 雪</p>
        {open && <Display fCerrar={setOpen}/>}
      </nav>
  )
}
