import React from 'react'

const Display = (props) => {
  return (
    <div className=' md:w-1/2 flex flex-col w-screen h-screen bg-gradient-to-b from-orange-600 to-orange-500 z-10 absolute items-center gap-2'>
              <div className='flex justify-between w-full p-2 items-center'>
                <img className='w-10  h-10' src="./images/imgDrawer.png" alt="" />
                <p className='text-white'>manupebay@hotmail.com</p>
                <img className="w-5  h-5 cursor-pointer" src="./images/X.png" alt=""  onClick={()=> props.fCerrar(false)}/>
              </div>
              <button className=' w-4/5 h-10 font-bold rounded-xl bg-white text-orange-600 justify-center'>Home</button>
              <button className=' w-4/5 h-10 font-bold rounded-xl bg-white text-orange-600 justify-center'>Register</button>
              <button className=' w-4/5 h-10 font-bold rounded-xl bg-white text-orange-600 justify-center'>Sign In</button>
            </div>
  )
}

export default Display