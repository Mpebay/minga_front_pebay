import React, { useEffect, useState } from 'react'
import ArrowLeft from './ArrowLeft.jsx'
import ArrowRigth from './ArrowRigth.jsx'
import axios from 'axios'

const Carousel = () => {
let [counter, setCounter] = useState(0)
let [categories, setCategorias] = useState([])
let url = 'https://minga-back-vyqy.onrender.com/categories'


const prev = () => {
  setCounter((prevCounter) => (prevCounter === 0 ? categories.length - 1 : prevCounter - 1));
}
const next = () => {
  setCounter((prevCounter) => (prevCounter === categories.length - 1 ? 0 : prevCounter + 1));
}
function getData(){
axios(url)
.then(res=>setCategorias(res.data.categories))
.catch((err)=>console.log(err.message))
}
useEffect(()=>{
getData()
}, [])

  return (
    <section className='hidden md:flex justify-around md:my-6 bg-pink-400 max-h-screen  m-8 rounded-md'>
      <ArrowLeft left = {prev}/>
      <img className='h-60 -mt-8' src={categories[counter]?.character_photo} alt="character_carousel" />
      <img className='-mt-8 h-60 pb-4' src= {categories[counter]?.cover_photo} alt="poster_carousel" />
      <div className='w-80 m-8 text-white'>
        <h3 className='text-left flex'>{categories[counter]?.name}</h3>
        <p className='text-left text-sm'>{categories[counter]?.description}</p>
      </div>
      <ArrowRigth right = {next} />
    </section>
  )
}

export default Carousel