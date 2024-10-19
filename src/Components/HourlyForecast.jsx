import React from 'react'
import { customFormatting } from '../FetchInformation';

function HourlyForecast({ hourlyData, currentWeather: { timezone } }) {
  if (!hourlyData || !hourlyData.HourlyWeather) {
    return <p className='items-center w-7/12' > Loading...</p>;
  }
  return (
    <div className=' flex flex-row justify-around w-full ' style={{marginTop:'2%'}}>
      <div className=' w-full rounded-xl items-center  bg-slate-600 bg-opacity-45 shadow shadow-slate-900  border-2 border-slate-700' style={{padding:'0.6%'}}> 
        <p className='  text-white' style={{marginLeft: '2%'}}>Hourly Forecast</p>
        <hr  style={{width:"95.5%", marginLeft:'2%',padding:'0.3%'}} />
        <div className=' flex flex-row justify-around opacity-'>
        {Array.isArray(hourlyData.HourlyWeather) && hourlyData.HourlyWeather.map((item, index) => (
        
        <div key={index} className=' flex flex-col items-center justify-center'>
          <p className=' text-lg '>{customFormatting(parseInt(item.dt),"h:mm a",timezone)}</p>
          <img src={`https://openweathermap.org/img/wn/${item.icon}.png`} 
          alt="Weather Icon" className=' w-10 '/>
          <p className=' text-xl text-gray-300'> {parseInt(item.temp)}°C</p>
      </div>
      ))}          
        </div>
      </div>
      
      </div>
  )
}

export default HourlyForecast;