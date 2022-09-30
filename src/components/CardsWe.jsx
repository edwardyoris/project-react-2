import React from 'react'
import { useState } from 'react'

const CardsWe = ({ weather, temperatura }) => {

  const [siTempCel, setsiTempCel] = useState(true)
  const cambiaTemp = () => setsiTempCel(!siTempCel)

  return (

    <article className='card__article'>
      <h1 className='card__h1-title'>Weather APP</h1>
      <h2 className='card__h2-subtitle'>{`${weather?.name}, ${weather?.sys.country}`}</h2>
      <div className='card__sections'>
        <section className='card__section-1'>
          <img src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="Iconos" />
          {/* Podemos usar ternario si se nos complica corto (&&) <img src={weather ? `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="Iconos" /> */}
        </section>
        <section className='card__section-2'>
          <h3>"{weather?.weather[0].description}"</h3>
          <ul>
            <li><span>Wind Speed:</span> {weather?.wind.speed} m/s</li>
            <li><span>Clouds:</span> {weather?.clouds.all} %</li>
            <li><span>Pressure:</span> {weather?.main.pressure} hPa</li>
          </ul>
        </section>
      </div>
      <h3 className='card__h3-temp'>{siTempCel ? `${temperatura?.celsius} °C` : `${temperatura?.farenheit} °F`}</h3>
      <button className='card__btn' onClick={cambiaTemp}>{siTempCel ? 'Cambia a °F' : 'Cambia a °C'}</button>
    </article>
  )
}

export default CardsWe