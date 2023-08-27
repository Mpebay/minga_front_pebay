import React from 'react'
import ArrowLeft from './ArrowLeft'
import ArrowRigth from './ArrowRigth'

export default function Carousel() {
  return (
    <div className="max-md:hidden md: my-5 w-10/12 h-56 bg-gradient-to-b from-orange-600 to-orange-500 flex items-center px-5 justify-between md:h-1/4">
          <ArrowLeft/>
          <img className="h-40 mb-10" src="./images/imagen-carr-1.png" alt="" />
          <img className="h-40 mb-8" src="./images/imagen-carr-2.png" alt="" />
          <div className='md:w-48 lg:w-96'>
            <h4 className='text-white md:text-center lg:text-left'>Shonen:</h4>
            <p className='text-white text-xs md:text-center lg:text-left'>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
          </div>
          <ArrowRigth/>
    </div>
  )
}
