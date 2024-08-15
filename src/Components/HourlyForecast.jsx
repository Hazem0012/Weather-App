import React from 'react'
import { customFormatting } from '../FetchInformation';

function HourlyForecast({ hourlyData, currentWeather: { timezone } }) {
  if (!hourlyData || !hourlyData.HourlyWeather) {
    return <p className='items-center p-3 ml-20 w-7/12  my-3'> Loading...</p>;
  }
  return (
      <div className=' rounded-xl items-center p-3 ml-20 w-7/12  my-3 bg-slate-600 bg-opacity-45 shadow shadow-slate-900  border-2 border-slate-700'> 
        <p className=' relative left-5 text-white'>Hourly Forecast</p>
        <hr className=' relative left-5 my-3' style={{width:95.5+"%"}}/>
        <div className=' flex flex-row justify-around opacity-'>
        {Array.isArray(hourlyData.HourlyWeather) && hourlyData.HourlyWeather.map((item, index) => (
        
        <div key={index} className=' flex flex-col items-center justify-center'>
          <p className=' text-lg '>{customFormatting(parseInt(item.dt),"h:mm a",timezone)}</p>
          <img src={`https://openweathermap.org/img/wn/${item.icon}.png`} 
          alt="Weather Icon" className=' w-10 my-1'/>
          <p className=' text-xl text-gray-300'> {parseInt(item.temp)}°C</p>
      </div>
      ))}
          
        </div>
      </div>
  )
}

export default HourlyForecast;