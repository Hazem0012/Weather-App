import React, { useState } from 'react'
import { UilTemperatureHalf, UilWind , UilTear,UilSun, UilSunset,UilEye } from '@iconscout/react-unicons'
import { customFormatting } from '../FetchInformation'

function WeatherDetails({moreDetails:{speed, humidity, feels_like, sunset, sunrise, visibility,timezone}}) {
    const [displayed, setDisplayed] = useState(true)

  const changeState=()=>{
    setDisplayed(!displayed)
  }

  return (
    <div className=' ml-20'>
        <div className=' py-1'>
            <button className=' text-lg text-cyan-200 ' onClick={changeState} >More Details <span className=' text-sm '>▼</span></button>
        </div>
        <div>
            {displayed &&
            (<div style={{width: 61.7+"%"}} className=' rounded-xl text-4xl border-2 border-slate-700 bg-opacity-45 bg-slate-600 shadow shadow-slate-900'>
            {/**Top Row */}
            <div className='flex flex-row ml-10 my-2'>
                {/* Real Feel*/ }
                <div className='flex flex-col start items-center text-2xl text-gray-300  w-1/4 h-1/4 p-2 ml-1 mt-1'>
                <div className='flex flex-row relative right-2'>
                    <UilTemperatureHalf size={30} className="  relative right-4"/>
                    Real Feel
                </div>
                <div className=' text-3xl text-black ml-3'>{parseInt(feels_like)}°C</div>
                </div>
                
                {/* Sun Rise*/ }

                <div className='flex flex-col justify-start items-center text-2xl text-gray-300 w-1/4 h-1/4 p-2 ml-20  mt-1'>
                <div className='flex flex-row relative right-2'>
                    <UilSun size={30} className="  relative right-4"/>
                    Sun Rise
                </div>
                <div className=' text-3xl text-black ml-10'>{customFormatting(parseInt(sunrise),"h:mm a'",timezone)}</div>
                </div>

                {/* Sun Set*/ }

                <div className='flex flex-col justify-start items-center text-2xl text-gray-300  w-1/4 h-1/4 p-2 ml-20 mt-1'>
                <div className='flex flex-row relative right-2'>
                    <UilSunset size={30} className="  relative right-4"/>
                    Sun Set
                </div>
                <div className=' text-3xl text-black ml-10'>{customFormatting(parseInt(sunset),"h:mm a'",timezone)}</div>
                </div>
            </div>

            {/**Second Row */}

            <div className='flex flex-row ml-10 my-2'>

                {/**Humidity */}
                <div className='flex flex-col justify-center items-center text-2xl text-gray-300  w-1/4 h-1/4 p-2 ml-1 mt-1'>
                <div className='flex flex-row relative right-2'>
                    <UilTear size={30} className=" relative right-4"/>
                    Humidity
                </div>
                <div className=' text-3xl text-black ml-3'>{humidity}%</div>
                </div>
                
                {/* Wind*/ }
            
                <div className='flex flex-col justify-start items-center text-2xl text-gray-300 w-1/4 h-1/4 p-2 ml-24 mt-1'>
                <div className='flex flex-row relative right-2'>
                    <UilWind size={30} className="  relative right-4"/>
                    Wind Speed
                </div>
                <div className=' text-3xl text-black ml-3'>{parseInt(speed)} m/s</div>
                </div>

                {/* Visibility*/ }

                <div className='flex flex-col justify-start items-center text-2xl text-gray-300 w-1/4 h-1/4 p-2 ml-16 mt-1'>
                <div className='flex flex-row relative'>
                    <UilEye size={30} className="  relative right-4"/>
                    Visibility
                </div>
                <div className=' text-3xl text-black ml-5'>{visibility/1000} km</div>
                </div>
            </div>
            
            </div>)}
        </div>
      </div>
  )
}

export default WeatherDetails