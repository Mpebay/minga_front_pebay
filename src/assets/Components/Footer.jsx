import React from 'react'

export default function Footer() {
  return (
    <footer className='h-48 md:flex flex-col'>
    <img className="w-full" src="./images/c8a658b7a0fe27a19ab7b649e6e62b30 1.png" alt="" />
    <div className='flex flex-col items-center pt-2 gap-2 md:flex-row md:justify-around self-center md:w-5/6'>
      <p className='text-md cursor-pointer'>Home</p>
      <p className='text-md cursor-pointer'>Mangas</p>
      <div className='flex md:w-48'>
        <p className="w-20 h-10 text-orange-600 cursor-pointer">Minga</p>
        <p className='text-black'>雪</p>
      </div>
      <div className='flex flex-col gap-2'>
        <img src="./images/Social.png" alt="" />
        <button className='text-white bg-gradient-to-r from-orange-600 to-orange-500 rounded-md'>Donate ♡</button>
      </div>
    </div>
  </footer>
  )
}
