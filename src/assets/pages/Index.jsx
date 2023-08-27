import React from 'react'
import ButtonWelcome from '../Components/ButtonWelcome'
import Welcome from '../Components/Welcome'
import ArrowLeft from '../Components/ArrowLeft'
import ArrowRigth from '../Components/ArrowRigth'
import Carousel from '../Components/Carousel'

export default function Index() {
  return (
    <main className='flex flex-col justify-center items-center h-screen'>
        <div className='xs:h-screen bg-none gap-5 md:bg-fondoLaptop bg-cover flex flex-col justify-center items-center md:h-3/4 px-2 w-full'>
          <Welcome/>
          <ButtonWelcome/>
        </div>
        <Carousel/>
    </main>
  )
}
