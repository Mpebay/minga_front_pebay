import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body className="xs: w-full h-screen bg-fondoMobile bg-cover md:bg-none">

      <nav className='flex absolute justify-between items-center px-4 pt-2 h-1/6 md:absolute w-full'>
        <img className=' w-15 h-14 absolute top-5 left-5 cursor-pointer' src="./images/Menu.png" alt="" />
        <p className="absolute top-5 right-5 text-gray-50 text-[40px] font-extrabold text-center cursor-pointer"> 雪</p>
      </nav>



      <main className='flex flex-col justify-center items-center h-screen'>
        <div className='xs:h-screen bg-none gap-5 md:bg-fondoLaptop bg-cover flex flex-col justify-center items-center md:h-3/4 px-2 w-full'>
          <h1 className="md:text-start text-white text-center w-5/6 text-3xl font-medium ">For the love of manga</h1>
          <h3 className="md:text-start text-white text-center w-5/6 text-sm">Explore our varieties</h3>
          <h5 className='max-md:hidden text-start w-5/6 text-white text-base font-semibold'>#MingaLove❤</h5>
          <div className='md:w-5/6'>
            <button className="xs:text-orange-600 xs:bg-white font-bold text-md xs:w-48 px-5 py-2 rounded-md mt-2 md:self-start ">Sign In!</button>
          </div>
        </div>
        <div className="max-md:hidden md: my-5 w-10/12 h-56 bg-gradient-to-b from-orange-600 to-orange-500 flex items-center px-5 justify-between md:h-1/4">
          <img className='w-5 h-5 p-1 bg-slate-200 rotate-180 rounded-lg cursor-pointer' src="../public/images/Vector (Stroke).png" alt="" />
          <img className="h-40 mb-10" src="./images/imagen-carr-1.png" alt="" />
          <img className="h-40 mb-8" src="./images/imagen-carr-2.png" alt="" />
          <div className='md:w-48 lg:w-96'>
            <h4 className='text-white md:text-center lg:text-left'>Shonen:</h4>
            <p className='text-white text-xs md:text-center lg:text-left'>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
          </div>
          <img className='w-5 h-5 p-1 bg-slate-200 rounded-lg cursor-pointer' src="../public/images/Vector (Stroke).png" alt="" />
        </div>
      </main>



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

    </body>
  )
}

export default App
