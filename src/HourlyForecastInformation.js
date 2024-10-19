const HourlyAPI="df3309e0e7dff11ddf218c08fd80c55c"
const baseUrl="https://api.openweathermap.org/data/2.5/forecast?"

const getHourlyDataFetch= async(search)=>{
    const url= new URL(baseUrl)
    url.search= new URLSearchParams({...search, apikey:HourlyAPI})
    return await fetch(url).then(res=>res.json()).catch(rejected => {
        console.log("The error is" + rejected);
    });
};


const getHourlyData =(data)=>{
    if (!data){
        return {}
    }
        const {
            list,
            
        }=data
    
        const HourlyWeather=[]
        
        for(let i=0; i<9; i++){
            const { dt, 
                main:{temp}, 
                weather: [{ icon }] } = list[i]
            HourlyWeather.push({ dt, temp,  icon  })
        }


    return {HourlyWeather}
}

const fetchHourlyForecastData= async (searchParam)=>{
    const info =await getHourlyDataFetch(searchParam).then(getHourlyData)
    return info
}

export default fetchHourlyForecastData;