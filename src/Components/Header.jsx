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
    <div className=' flex items-center  justify-center w-full'>
        <form className=' w-full flex justify-center'>
            <input type="text"  style={{marginTop:'2%',marginBottom:'2%', width:'30%', padding:'0.4%'}} className=' rounded-xl' placeholder='Search...' value={search} onChange={(e)=>{
              setSearch(e.currentTarget.value)
            }} onKeyDown={eventHandler}/>
        </form>

    </div>
  )
}

export default Header;