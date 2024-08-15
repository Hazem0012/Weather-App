import React, { useState } from 'react'
import { fetchcurrentWeatherData } from '../FetchInformation'


function Header({setQuery}) {

const [search, setSearch]=useState("")
  const eventHandler= async (event)=>{

      
      if(event.key==='Enter'){
        event.preventDefault();
        console.log(search)
        const info = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b3b3be5fc80bc0f2ae48cba5f896ef81`)
        if (!info.ok){
          alert("Invalid Entry, please try again")
        }
        setQuery(search)  
      }
     
  }


  return (
    <div className=' ml-20 flex flex-row items-center mb-5 justify-center'>
        <form >
            <input type="text" className=' px-2 max-w-screen-lg ' placeholder='Search...' value={search} onChange={(e)=>{
              setSearch(e.currentTarget.value)
            }} onKeyDown={eventHandler}/>
        </form>

    </div>
  )
}

export default Header;