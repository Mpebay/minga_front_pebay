import React from 'react'
import Navbar from './Navbar'
import Index from '../pages/Index'
import Footer from './Footer'

export default function Body() {
  return (
    <body className="xs: w-full h-screen bg-fondoMobile bg-cover md:bg-none">

    <Navbar/>
    <Index/>
    <Footer/>


    </body>
  )
}


