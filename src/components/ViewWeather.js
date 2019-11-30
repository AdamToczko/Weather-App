import React from 'react';


// Nazwie miasta, dla którego jest wyświetlana pogoda
// Położeniu geolokalizacyjnym miasta (latitude, longitude)
// Aktualnej temperaturze w danej chwili
// Zakresie temperatur z danego dnia
// Aktualnej wilgotsności oraz ciśnieniu atmosferycznym
// Aktualnych opadach oraz wietrze


function ViewWeather (props) {
      const {long, lati, weatherDescription, weatherIcon, temp, pressure, humidity,
    tempMin, tempMax, windSpeed, clouds, sunrise, sunset,
    error, city, country} = props.weather
    
    let Sunrise = new Date(sunrise*1000).toLocaleTimeString();
    let Sunset = new Date(sunset*1000).toLocaleTimeString();

          return (
              <div>
              {error ? (<span style={{color: 'red'}}>Please try different city as <span style={{color: 'yellow'}}>{city}</span> is not in our database </span>)
            : (
            <div>
            <div class="row">
            <div class="col-6 col-sm-4">City: <span style={{color: 'yellow'}}>{city}</span> </div>
            <div class="col-6 col-sm-4">Country: <span style={{color: 'yellow'}}>{country}</span> </div>
            <div class="col-6 col-sm-4">Description: <span style={{color: 'yellow'}}>{weatherDescription}</span> </div>
            <div class="w-100 d-none d-md-block"></div>
            <div class="col-6 col-sm-4">longitude: <span style={{color: 'yellow'}}>{long}</span> </div>
            <div class="col-6 col-sm-4">latitude: <span style={{color: 'yellow'}}>{lati}</span> </div>
            <div class="col-6 col-sm-4">Temperature now: <span style={{color: 'yellow'}}>{temp} </span>°C</div>
            <div class="w-100 d-none d-md-block"></div>
            <div class="col-6 col-sm-4"> <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}/></div>
            <div class="col-6 col-sm-4">Min temp: <span style={{color: 'yellow'}}>{tempMin}</span> °C</div>
            <div class="col-6 col-sm-4">Max temp: <span style={{color: 'yellow'}}>{tempMax}</span> °C</div>
            <div class="w-100 d-none d-md-block"></div>
            <div class="col-6 col-sm-4">Clouds: <span style={{color: 'yellow'}}>{clouds}</span> </div>
            <div class="col-6 col-sm-4">Pressure: <span style={{color: 'yellow'}}>{pressure} </span>hpa</div>
            <div class="col-6 col-sm-4">Humidity: <span style={{color: 'yellow'}}>{humidity}</span> %</div>
            <div class="w-100 d-none d-md-block"></div>
            <div class="col-6 col-sm-4">Wind: <span style={{color: 'yellow'}}>{windSpeed}</span> m/s</div>
            <div class="col-6 col-sm-4">Sunrise: <span style={{color: 'yellow'}}>{Sunrise}</span></div>
            <div class="col-6 col-sm-4">Sunset: <span style={{color: 'yellow'}}>{Sunset}</span></div>
            </div> 
             </div>
            )}
             </div>
            )
        }
      
  
  
export default ViewWeather;
  