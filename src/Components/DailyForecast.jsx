import React from 'react'
import { customFormatting } from '../FetchInformation';
function DailyForecast({ dailyData:{DailyWeather,Text}, currentWeather:{timezone,temp_max,temp_min} }) {

  return (
    <div>
      <div className='absolute right-6 top-20 p-2 rounded-xl flex flex-col justify-around shadow shadow-slate-900 bg-slate-600 bg-opacity-45 border-2 border-slate-700' style={{ width: 28 + "rem" }}>
      <p className='ml-4 text-xl text-white'>Daily Forecast </p>
      <hr className='w-11/12 ml-4 my-2' />
      {/* Check if dailyWeather is defined and it's an array before mapping */}
      {Array.isArray(DailyWeather) && DailyWeather.map((item, index) => (
        
        <div key={index} className='rounded border-2 border-transparent shadow shadow-slate-800 flex flex-row items-center my-1 text-2xl '>
          <div className=' ml-8 '>
            <p className='text-3xl text-white'>{customFormatting(parseInt(item.EpochDate),"cccc",timezone)}</p>
            <p className='text-xl text-gray-300'>{customFormatting(parseInt(item.EpochDate),"dd/MM/yyyy",timezone)}</p>
          </div>
          {index===0?(
          <>
          <p className='absolute right-44 text-gray-300'> {parseInt(temp_min)}°C</p>
          <p className='absolute right-16 text-gray-300'> {parseInt(temp_max)}°C</p>
          </>): 
          (<>
          <p className='absolute right-44 text-gray-300'> {parseInt(item.Minimum.Value)}°C</p>
          <p className='absolute right-16 text-gray-300'> {parseInt(item.Maximum.Value)}°C</p>
          </>)}
        </div>
      ))}
      </div> 
      <div className='absolute right-6  p-2 rounded-xl flex flex-col justify-around shadow shadow-slate-900
       bg-slate-600 bg-opacity-45 border-2 border-slate-700' style={{ width: 28 + "rem" , top:73.5 +"%"}}>
        <p className='ml-4 text-xl text-white'>Weekly Highlight </p>
        <hr className='w-11/12 ml-4 my-2' />
        <p className='ml-4 text-lg text-gray-300'>{Text}</p>
       </div>
    </div>
  )
}

export default DailyForecast