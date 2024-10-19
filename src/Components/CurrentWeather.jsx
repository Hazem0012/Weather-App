import React from 'react'
import { customFormatting } from '../FetchInformation';


function CurrentWeather({currentWeather:{main, temp, temp_min, temp_max, icon, dt,name,timezone}}) {
  return (
    <div className='   w-7/12  '>
      <div className='flex flex-row justify-around items-center'>
        
        <div className=' flex justify-start mr-15'> 
          <img src={`https://openweathermap.org/img/wn/${icon}.png`} 
          alt="Weather Icon" className=' w-40 justify-start flex'/>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-row text-white text-xl'>{customFormatting(parseInt(dt), "cccc, LLLL dd, yyyy",timezone)} </div>
          <div className='my-2 font-medium text-5xl'>{name} </div>
          <div className='text-6xl'>{parseInt(temp)}°C</div>
          <div className=' text-cyan-300 text-xl mt-2'> {main}</div>
          <div className='flex flex-row justify-around w-64 text-xl text-white'>
            <div>H: <span className=' font-light'>{parseInt(temp_max)}°C</span></div>
            <div>L: <span className=' font-light'>{parseInt(temp_min)}°C</span></div>
          </div>
          
        </div>
      </div>
      <br />
      
    {/** Herein is the more Info dropdown menu*/ }

      
    </div>
  );
}

export default CurrentWeather