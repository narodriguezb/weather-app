import {useEffect, useState} from 'react'
import WeatherForm from "./WeatherForm"
import WeatherMainInfo from "./WeatherMainInfo"

export default function WeatherApp(){
    const [weather,setWeather]=useState(null)
  
    useEffect(()=>{
        loadInfo()
    },[])

    useEffect(()=>{
        document.title=`Weather | ${weather?.location.name ?? ''}`
    },[weather])

    async function loadInfo(city="london"){
        try {
            const key="fcba392b52354d29954174949220511"
            const urlTwo="http://api.weatherapi.com/v1/current.json?aqi=no"

            const url=`${urlTwo}&key=${key}&q=${city}`
            
            const request=await fetch(url)

            const json= await request.json()
            
            setWeather(json)

        } catch (error) {
           
        }
    }

    function handleChangeCity(city){
        setWeather(null);
        loadInfo(city);
        
    }

    return <div>
        <WeatherForm onChangeCity={handleChangeCity}/>
        <WeatherMainInfo weather={weather}/>
    </div>
}