import { DateTime } from "luxon";
const weatherAPI="df3309e0e7dff11ddf218c08fd80c55c"
const baseURL="https://api.openweathermap.org/data/2.5/weather?"

const getweatherFetch= (search)=>{
    const url= new URL(baseURL)
    url.search= new URLSearchParams({...search, appid:weatherAPI})
    return fetch(url).then((res)=>res.json())
};


const getData =(currentWeatherData)=>{
    const {
        coord:{
            lat,
            lon
        },
        timezone,
        weather:[
            {
                main,
                description,
                icon
            }
        ],
        main:{
            temp,
            feels_like,
            temp_min,
            temp_max,
            humidity
        },
        visibility,
        wind:{
            speed
        },
        sys:{
            sunrise,
            sunset
        },
        dt,
        
        name,


    }=currentWeatherData 

    return {timezone,lat,lon, main, description, icon, temp, feels_like, temp_max, temp_min, humidity, visibility, name, speed, sunrise, sunset, dt}
}


export const customFormatting=(data, format,timezone=-14400)=>{
    const tzone=timezone+14400
    const date=DateTime.fromSeconds(data+tzone).toFormat(format)
  
    return date
}

export const fetchcurrentWeatherData= async (searchParam)=>{
    const info =await getweatherFetch(searchParam).then(getData)
    return info
}