import React from 'react';


// Nazwie miasta, dla którego jest wyświetlana pogoda
// Położeniu geolokalizacyjnym miasta (latitude, longitude)
// Aktualnej temperaturze w danej chwili
// Zakresie temperatur z danego dnia
// Aktualnej wilgotności oraz ciśnieniu atmosferycznym
// Aktualnych opadach oraz wietrze


function ViewWeather (props) {
      const {long, lati, weatherDescription, weatherIcon, temp, pressure, humidity,
    tempMin, tempMax, windSpeed, clouds, sunrise, sunset,
    error, city} = props.weather
    
          return (
              <div>
              {error ? (<span>Please try different city {city}</span>)
            : (
            <div>
             <h3> {city} </h3>
             <h3> {long} </h3>
             <h3> {lati} </h3>
             <h3> {weatherDescription} </h3>
             <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}/>
             <h3> {temp} </h3>
             <h3> {tempMin} </h3>
             <h3> {tempMax} </h3>
             <h3> {windSpeed} </h3>
             <h3> {clouds} </h3>
             <h3> {sunrise} </h3>
             <h3> {sunset} </h3>
             <h3> {pressure} </h3>
             <h3> {humidity} </h3>
             </div>
            )}
             </div>
            )
        }
      
  
  
export default ViewWeather;
  