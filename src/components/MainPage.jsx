import React, { useEffect, useState } from 'react'
import searchIcon from '../assets/search.png'

const MainPage = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("Nashik");
    const [searchCity, setSearchCity] = useState("Nashik")
    const [hourlyWeatherData, setHourlyWeatherData] = useState([]);

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

        const fetchHourlyData = async () => {
            const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

            try {
                const resonse = await fetch(url);
                const data = await resonse.json();
                setHourlyWeatherData(data);
                console.log(data);
            } catch (error) {
                console.error("Error from hourly data: ", error)
            }
        }
        fethWeatherData();
        fetchHourlyData();
    }, [searchCity])
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
                <img
                    className='w-5 cursor-pointer'
                    src={searchIcon}
                    alt="search icon"
                    onClick={() => setSearchCity(city)}
                />
            </div>
            {weatherData && (
                <div>
                    <h1 className='text-white'>{weatherData.name}, {weatherData.sys.country}</h1>
                </div>
            )}
            {weatherData && (
                <div>
                    <img className='w-24' src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt='Weather Icon' />
                </div>
            )}

            {weatherData && (
                <div className='text-white'>
                    <h1 className='text-2xl text-center'>{weatherData.main.temp}&deg;</h1>
                    <div>
                        <h3 className='text-center'>{weatherData.weather[0].description}</h3>
                        <div className='flex justify-between gap-3'>
                            <h3>Max: {weatherData.main.temp_max}&deg;</h3>
                            <h3>Min: {weatherData.main.temp_min}&deg;</h3>
                        </div>
                    </div>
                </div>
            )}
            {
                hourlyWeatherData && hourlyWeatherData.list && (
                    <div className='text-white'>
                        <div className='flex justify-between gap-2'>
                            <h4>Today</h4>
                            <h4>{new Date(hourlyWeatherData.list[1].dt_txt).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric'
                            })}</h4>
                        </div>
                        <hr className='m-1' />
                        {hourlyWeatherData && (

                            <div className='flex justify-evenly gap-3 text-center'>
                                {hourlyWeatherData.list.slice(0, 4).map((item, idx) => {
                                    return (
                                        <div key={idx}>
                                            <p className='text-sm'>{Math.round(item.main.temp)}&deg;</p>
                                            <img
                                                className='w-8'
                                                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                                alt="icon"
                                            />
                                            <p className='text-xs'>
                                                {new Date(item.dt_txt).toLocaleTimeString('en-US', {
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                    hour12: true
                                                })}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                )
            }
        </div>
    )
}

export default MainPage