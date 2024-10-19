import React from 'react'
import { customFormatting } from '../FetchInformation';
function DailyForecast({ dailyData:{DailyWeather,Text}, currentWeather:{timezone,temp_max,temp_min} }) {

  return (
    <div>
      <div className='  p-2 rounded-xl flex flex-col justify-around shadow shadow-slate-900 bg-slate-600 bg-opacity-45 border-2 border-slate-700' style={{ width:"100%", marginBottom:'4.5%' }}>
      <p className='text-xl text-white' style={{marginLeft:'2%'}}>Daily Forecast </p>
      <hr className='w-11/12 ' style={{marginLeft:'2%', marginBottom:'2%'}} />
      {/* Check if dailyWeather is defined and it's an array before mapping */}
      {Array.isArray(DailyWeather) && DailyWeather.map((item, index) => (
        
        <div key={index} className='relative w-full rounded border-2 border-transparent shadow shadow-slate-800 flex flex-row  items-center my-1 text-2xl '>
          <div style={{marginLeft:'2%'}}>
            <p className='text-3xl text-white w-1/3' style={{marginLeft:'2%'}}>{customFormatting(parseInt(item.EpochDate),"cccc",timezone)}</p>
            <p className='text-xl text-gray-300 w-1/3' style={{marginLeft:'2%'}}>{customFormatting(parseInt(item.EpochDate),"dd/MM/yyyy",timezone)}</p>
          </div>
          {index===0?(
          <>
          <p className=' text-gray-300 w-1/2 absolute' style={{left:'52%'}}> {parseInt(temp_min)}°C</p>
          <p className=' text-gray-300 w-1/2 absolute' style={{left:'82%'}}> {parseInt(temp_max)}°C</p>
          </>): 
          (<>
          <p className=' text-gray-300 w-1/3 absolute' style={{left:'52%'}}> {parseInt(item.Minimum.Value)}°C</p>
          <p className=' text-gray-300 w-1/3 absolute' style={{left:'82%'}}> {parseInt(item.Maximum.Value)}°C</p>
          </>)}
        </div>
      ))}
      {/** Weekly Highlights
      <div className='  p-2 rounded-xl flex flex-col justify-around shadow shadow-slate-900
          bg-slate-600 bg-opacity-45 border-2 border-slate-700' style={{ width:"28%"}}>
          <p className='ml-4 text-xl text-white'>Weekly Highlight </p>
          <hr className='w-11/12 ml-4 my-2' />
          <p className='ml-4 text-lg text-gray-300'>{Text}</p>
        </div> 
        
        
        This weather application offers real-time weather updates, featuring current conditions along with comprehensive daily and hourly forecasts for any location you query. Utilizing the OpenWeather API, it ensures precise and dependable weather information to assist you in planning your activities and staying ready for any weather scenario.*/}
      </div> 
    </div>
  )
}

export default DailyForecast