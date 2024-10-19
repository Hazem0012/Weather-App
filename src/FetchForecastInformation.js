const getDailyDataFetch= async(keyValue)=>{
    const url= new URL(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${keyValue}?apikey=aZfENw3vWA3avnU8CWADPOyI0iCWnOHD&metric=True`)
    return await fetch(url).then(res=>res.json()).catch(rejected => {
        console.log("The error is" + rejected);
    });
};


const getDailyData =(data)=>{
    if (!data){
        return {}
    }
    const {
            Headline: {
                Text,
                EffectiveEpochDate,
                EndEpochDate
            },
            DailyForecasts
            
        }=data
    
    const DailyWeather=[]
        
    for(let i=0; i<5; i++){
        const { 
            EpochDate,
            Temperature:{
                Minimum,
                Maximum
            }, 

        } = DailyForecasts[i]
        
        DailyWeather.push({ EpochDate, Minimum, Maximum })
    }


    return {DailyWeather, Text, EffectiveEpochDate, EndEpochDate }
}

export const fetchDailyForecastData= async (keyValue)=>{
    const info =await getDailyDataFetch(keyValue).then(getDailyData)
    return info
}

