import React from 'react';
import Moment from 'react-moment';

function ViewWeather (props) {
      const {long, lati, weatherDescription, weatherIcon, temp, pressure, humidity,
    tempMin, tempMax, windSpeed, clouds, sunrise, sunset,
    error, city, country, dataNotLoaded, timezone} = props.weather
    
    let Sunrise = new Date(sunrise*1000).toLocaleTimeString();
    let Sunset = new Date(sunset*1000).toLocaleTimeString();
    
    let date = new Date();

    if (dataNotLoaded && !error) {
      return (
        <div></div>
      )
      } else if (error){
        return (<span style={{color: 'white', background: 'rgba(0,106,221,0.2)'}}>Please try different city as <span style={{color: 'yellow'}}>{city}</span> is not in our database </span>)
      } else {
          return (
          
            <div style={{background: 'rgba(0,106,221,0.1)', borderRadius: '3%'}} >
            <div className="col-12 col-sm-12">Searched City date & time <span style={{color: 'yellow'}}>
              {<Moment add={{ seconds: timezone -3600}}
              format='YYYY-MM-DD hh:mm'
              >{date}</Moment>} </span> </div>
           
            <div className="w-100 d-none d-md-block"></div>
            <div className="row">
            <div className="col-6 col-sm-4">City: <span style={{color: 'yellow'}}>{city}</span> </div>
            <div className="col-6 col-sm-4">Country: <span style={{color: 'yellow'}}>{country}</span> </div>
            <div className="col-6 col-sm-4">Description: <span style={{color: 'yellow'}}>{weatherDescription}</span> </div>
            <div className="w-100 d-none d-md-block"></div>
            <div className="col-6 col-sm-4">longitude: <span style={{color: 'yellow'}}>{long}</span> </div>
            <div className="col-6 col-sm-4">latitude: <span style={{color: 'yellow'}}>{lati}</span> </div>
            <div className="col-6 col-sm-4">Wind: <span style={{color: 'yellow'}}>{windSpeed}</span> m/s</div>
            <div className="w-100 d-none d-md-block"></div>
            <div className="col-6 col-sm-4">Temperature now: <span style={{color: 'yellow'}}>{temp} </span>°C</div>
            <div className="col-6 col-sm-4">Min temp: <span style={{color: 'yellow'}}>{tempMin}</span> °C</div>
            <div className="col-6 col-sm-4">Max temp: <span style={{color: 'yellow'}}>{tempMax}</span> °C</div>
            <div className="w-100 d-none d-md-block"></div>
            <div className="col-6 col-sm-4">Clouds: <span style={{color: 'yellow'}}>{clouds}</span> </div>
            <div className="col-6 col-sm-4">Pressure: <span style={{color: 'yellow'}}>{pressure} </span>hpa</div>
            <div className="col-6 col-sm-4">Humidity: <span style={{color: 'yellow'}}>{humidity}</span> %</div>
            <div className="w-100 d-none d-md-block"></div>
            
            <div className="col-6 col-sm-4">Sunrise: <span style={{color: 'yellow'}}>{Sunrise}</span></div>
            <div className="col-6 col-sm-4">Sunset: <span style={{color: 'yellow'}}>{Sunset}</span></div>
            <div className="col-6 col-sm-4"> <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}/></div>
            </div> 
             </div>
          ) }

}
  
  
export default ViewWeather;
  