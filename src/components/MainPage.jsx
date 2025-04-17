import React, { useEffect, useState } from 'react'
import searchIcon from '../assets/search.png'
import weather_Icon from '../assets/cloudy.png'

const MainPage = () => {
    const hourlyData = [1, 2, 3, 4];

    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("Nashik");

    useEffect(() => {
        const fethWeatherData = async () => {
            const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
            try {
                const response = await fetch(url);
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error("Error Fetching weather Data : ", error);
            }
        }
        fethWeatherData();
    }, [city])
    return (
        <div className='flex flex-col items-center space-y-6'>
            <div className='bg-gray-300 flex justify-between py-1 px-2 rounded-full mb-2'>
                <input
                    className='px-1 outline-0 text-sm'
                    type="search"
                    placeholder='Search City'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <img className='w-5 cursor-pointer' src={searchIcon} alt="search icon" />
            </div>
            {weatherData && (
                <div>
                    <h1 className='text-white'>{weatherData.name}, {weatherData.sys.country}</h1>
                </div>
            )}
            {weatherData && (
                <div>
                    <img className='w-24' src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt='Weather Icon' />
                </div>
            )}

            {weatherData && (
                <div className='text-white'>
                <h1 className='text-3xl text-center '>{weatherData.main.temp}&deg;</h1>
                <div>
                    <h3 className='text-center'>{weatherData.weather[0].description}</h3>
                    <div className='flex justify-between gap-5'>
                        <h3>Max: {weatherData.main.temp_max}&deg;</h3>
                        <h3>Min: {weatherData.main.temp_min}&deg;</h3>
                    </div>
                </div>
            </div>
            )}
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