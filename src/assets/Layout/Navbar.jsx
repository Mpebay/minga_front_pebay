import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex absolute justify-between items-center px-4 pt-2 h-1/6 md:absolute w-full'>
        <img className=' w-15 h-14 absolute top-5 left-5 cursor-pointer' src="./images/Menu.png" alt="" />
        <p className="absolute top-5 right-5 text-gray-50 text-[40px] font-extrabold text-center cursor-pointer"> 雪</p>
      </nav>
  )
}
