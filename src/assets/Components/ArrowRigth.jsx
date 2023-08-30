import React from 'react'

const ArrowRight = (props) => {
  return (
    <img onClick={props.right} className='w-5 h-5 bg-zinc-400 rounded-xl cursor-pointer' src="./images/Vector (Stroke).png" alt="right_arrow" />
  )
}

export default ArrowRight