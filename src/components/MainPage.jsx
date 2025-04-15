import React from 'react'
import searchIcon from '../assets/search.png'
import weather_Icon from '../assets/cloudy.png'

const MainPage = () => {
    const hourlyData = [1, 2, 3, 4];
    return (
        <div className='flex flex-col items-center space-y-6'>
            <div className='bg-gray-300 flex justify-between py-1 px-2 rounded-full mb-2'>
                <input className='px-1 outline-0 text-sm' type="search" placeholder='Search City' />
                <img className='w-5 cursor-pointer' src={searchIcon} alt="search icon" />
            </div>
            <div>
                <h1 className='text-white'>Nashik, Maharashtra</h1>
            </div>
            <div>
                <img className='w-24' src={weather_Icon} alt='Weather Icon' />
            </div>

            <div className='text-white'>
                <h1 className='text-3xl text-center '>19&deg;</h1>
                <div>
                    <h3 className='text-center'>Percipitations</h3>
                    <div className='flex justify-between gap-5'>
                        <h3>Max: 24&deg;</h3>
                        <h3>Min: 20&deg;</h3>
                    </div>
                </div>
            </div>
            <div className='text-white'>
                <div className='flex justify-between w-full gap-28 '>
                    <h4>Today</h4>
                    <h4>July, 21</h4>
                </div>
                <hr className='m-2' />
                <div className='flex justify-evenly gap-3 text-center'>
                    {
                        hourlyData.map((idx) => (
                            <div key={idx}>
                                <p>19&deg;</p>
                                <img className='w-5' src={weather_Icon} alt="" />
                                <p >15:00</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MainPage