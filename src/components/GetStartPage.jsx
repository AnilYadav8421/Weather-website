import React from 'react'
import icon from '../assets/Icon.png'

const GetStartPage = () => {   
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
        <div className='m-6 p-2'>
            <img className='w-32' src={icon} alt="icon" />
        </div>
        <div className=''>
            <h2 className='text-white font-bold text-3xl'>Weather</h2>
            <h1 className='text-3xl text-amber-400'>ForeCasts</h1>
        </div>
        <div className='pb-2'>
            <button className='bg-amber-400 py-1 px-9 rounded-full font-medium cursor-pointer  hover:bg-amber-500 transition'>Get Start</button>
        </div>
    </div>
  )
}

export default GetStartPage