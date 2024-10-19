import React, { useState } from 'react'
import { UilTemperatureHalf, UilWind , UilTear,UilSun, UilSunset,UilEye } from '@iconscout/react-unicons'
import { customFormatting } from '../FetchInformation'

function WeatherDetails({moreDetails:{speed, humidity, feels_like, sunset, sunrise, visibility,timezone}}) {


  return (
    <div  >
       
        <div>
            
            <div style={{width: "100%",padding:'1%'}} className=' rounded-xl text-4xl border-2 border-slate-700 bg-opacity-45 bg-slate-600 shadow shadow-slate-900' >
            {/**Top Row */}
            <div className='flex flex-row justify-around' style={{ marginBottom:'1%'}}>
                {/* Real Feel*/ }
                <div className='flex flex-col justify-center items-center text-2xl text-gray-300 ' style={{width:'17%'}}>
                <div className='flex flex-row justify-around w-full'>
                    <UilTemperatureHalf size={30} />
                    <p>Real Feel</p>
                    
                </div>
                <div className=' text-3xl text-black' style={{marginLeft:''}}>{parseInt(feels_like)}°C</div>
                </div>
                
                {/* Sun Rise*/ }

                <div className='flex flex-col items-center justify-center text-2xl text-gray-300' style={{width:'17%'}}>
                <div className='flex flex-row w-full justify-around '>
                    <UilSun size={30} />
                    <p >Sun Rise</p>
                </div>
                <div className=' text-3xl text-black' style={{marginLeft:'16%'}}>{customFormatting(parseInt(sunrise),"h:mm a'",timezone)}</div>
                </div>

                {/* Sun Set*/ }
                <div className='flex flex-col justify-start items-center text-2xl text-gray-300 ' style={{width:'17%'}} >
                <div className='flex flex-row w-full justify-around'>
                    <UilSunset size={30} />
                    <p>Sun Set</p>
                </div>
                <div className=' text-3xl text-black' style={{marginLeft:'16%'}}>{customFormatting(parseInt(sunset),"h:mm a'",timezone)}</div>
                </div>
            </div>

            {/**Second Row */}

            <div className='flex flex-row justify-around' style={{ marginBottom:'1%'}} >

                {/**Humidity */}
                <div className='flex flex-col justify-center items-center text-2xl text-gray-300' style={{width:'17%',marginLeft:'1%'}}>
                <div className='flex flex-row w-full justify-around'>
                    <UilTear size={30} />
                    <p>Humidity</p>
                </div>
                <div className=' text-3xl text-black '>{humidity}%</div>
                </div>
                
                {/* Wind*/ }
            
                <div className='flex flex-col justify-start items-center text-2xl text-gray-300' style={{width:'20%', marginLeft:'2.5%'}}>
                <div className='flex flex-row w-full justify-around'>
                    <UilWind size={30} />
                    Wind Speed
                </div>
                <div className=' text-3xl text-black '>{parseInt(speed)} m/s</div>
                </div>

                {/* Visibility*/ }

                <div className='flex flex-col justify-start items-center text-2xl text-gray-300' style={{width:'17%'}}>
                <div className='flex flex-row w-full justify-around'>
                    <UilEye size={30} />
                    Visibility
                </div>
                <div className=' text-3xl text-black'>{visibility/1000} km</div>
                </div>
            </div>
            
            </div>
        </div>
      </div>
  )
}

export default WeatherDetails