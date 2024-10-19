const searchURL="https://dataservice.accuweather.com/locations/v1/search?"
const forecastAPI="aZfENw3vWA3avnU8CWADPOyI0iCWnOHD"

const getSearchURLFetch= async(search)=>{
    const url= new URL(searchURL)
    url.search= new URLSearchParams({...search, apikey:forecastAPI})
    return await fetch(url).then(res=>res.json()).catch(rejected => {
        console.log(rejected);
    });
};


const getKeyValue=(data)=>{
    
    const {Key}=data[0]
    return Key
}


export const fetchSearchURLData= async (searchParam)=>{
    const info =await getSearchURLFetch(searchParam).then(getKeyValue)
    console.log(typeof info)
    return info
}