import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import CardsWe from './components/CardsWe'
import Pensando from './components/Pensando'

function App() {

  const [coords, setcoords] = useState()
  const [weather, setweather] = useState()
  const [temperatura, settemperatura] = useState()     
 
  useEffect(() => {
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setcoords(obj);
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if(coords) {
      const APIkey = '581601bc90a1c26e57c9d67f2c064e43'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIkey}`
      axios.get(URL)
        .then(res => {
          const celsius = (res.data.main.temp - 273.15).toFixed(0)
          const farenheit = (celsius * 9 / 5 + 32).toFixed(0)
          settemperatura({celsius, farenheit})
          setweather(res.data)
          })    
        .catch(err => console.log(err))
    }
  }, [coords]) 

  return (
    <div className="App">
      { weather ? 
      <CardsWe weather = {weather} temperatura = {temperatura}/>
      :
      <Pensando/>
    }       
    </div>
  )
}

export default App
