import { useState, useEffect } from 'react';
import './output.css'
import CurrentWeather from './Components/CurrentWeather';
import DailyForecast from './Components/DailyForecast';
import Header from './Components/Header';
import { fetchcurrentWeatherData } from './FetchInformation';
import {fetchDailyForecastData} from './FetchForecastInformation';
import { fetchSearchURLData } from './ForecastInformation';
import WeatherDetails from './Components/WeatherDetails';
import fetchHourlyForecastData from './HourlyForecastInformation';
import HourlyForecast from './Components/HourlyForecast';

function App() {
  const [weather, setWeather]= useState({})
  const [keyValue, setKeyValue]=useState("55488")
  const [dailyData, setDailyData]= useState({})
  const [query, setQuery] =useState("Toronto")
  const [hourlyData, setHourlyData]= useState()


  async function fetchWeatherInfo(){
    try{
      const data= await fetchcurrentWeatherData({q : query, units: "metric"})
      setWeather(data)
      console.log(data)
    }
    catch{
      //alert("invalid Weather Data")
    }
  };  
  
  useEffect(() => {
    fetchWeatherInfo();
    
  }, [query]);


  async function fetchKeyValue(){
    try{
      const data= await fetchSearchURLData({q : query})
      setKeyValue(data)
    }

    catch{
      //alert("invalid Key Data")
    }
  };  
  
  useEffect(() => {
    fetchKeyValue();

  }, [query]);


  async function fetchDailyInfo(keyValue){
    try{
      const data= await fetchDailyForecastData(keyValue)
      setDailyData(data)
    }
      catch{
        //alert("invalid Daily Data")
      }
  };  
  
  useEffect(() => {
    
      fetchDailyInfo(keyValue);
    
  },[keyValue]);


async function fetchHourlyInfo(){
  console.log(weather)

    const data= await fetchHourlyForecastData({lat: weather.lat, lon: weather.lon, units:'metric'})
    setHourlyData(data)
 
}

useEffect(() => {
  if (weather.lat && weather.lon) {
    fetchHourlyInfo();
  }
}, [weather]);

  return (
    <div className=' m-auto '>
      <Header setQuery={setQuery}/>
      <CurrentWeather currentWeather={weather} />
      <WeatherDetails moreDetails={weather} />
      <DailyForecast dailyData={dailyData} currentWeather={weather} />
      <HourlyForecast hourlyData={hourlyData} currentWeather={weather} />
    

    </div>
  );
}

export default App;
