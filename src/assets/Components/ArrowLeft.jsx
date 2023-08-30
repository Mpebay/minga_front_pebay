import React from 'react'

const ArrowLeft = (props) => {
  return (
    <img onClick={props.left} className='w-5 h-5 bg-zinc-400 rounded-xl cursor-pointer ' src="./images/Vector1 (Stroke).png" alt="left_arrow" />
  )
}



export default ArrowLeft;