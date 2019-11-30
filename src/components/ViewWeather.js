import React from 'react';
import axios from 'axios';

// Nazwie miasta, dla którego jest wyświetlana pogoda
// Położeniu geolokalizacyjnym miasta (latitude, longitude)
// Aktualnej temperaturze w danej chwili
// Zakresie temperatur z danego dnia
// Aktualnej wilgotności oraz ciśnieniu atmosferycznym
// Aktualnych opadach oraz wietrze


class ViewWeather extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
    long: '',
    lati: '',
    weatherDescription: '',
    weatherIcon: '',
    temp: '',
    pressure: '',
    humidity: '',
    tempMin: '',
    tempMax: '',
    windSpeed: '',
    clouds: '',
    sunrise: '',
    sunset: '',
    
    }
    
    }
    componentDidMount() {
      axios
        .get("http://api.openweathermap.org/data/2.5/weather?q=Gdansk&units=metric&appid=05508bb378ad891b493b0c886cca7a57")
        .then(response => {
          return response.data;})
          .then(data =>
            this.setState({
                long: data.coord.lon,
                lati: data.coord.lat,
                weatherDescription: data.weather[0].description,
                weatherIcon:data.weather[0].icon,
                temp: data.main.temp,
                pressure: data.main.pressure,
                humidity: data.main.humidity,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                windSpeed: data.wind.speed,
                clouds: data.weather[0].main,
                sunrise: data.sys.sunrise,
                sunset: data.sys.sunset,
            })
            );
        }

  
    render() {
    //   const { weather, imBusy } = this.state;
  
          return (
              <div>
             <h3> {this.state.long} </h3>
             <h3> {this.state.lati} </h3>
             <h3> {this.state.weatherDescription} </h3>
             <h3> {this.state.weatherIcon} </h3>
             <h3> {this.state.temp} </h3>
             <h3> {this.state.tempMin} </h3>
             <h3> {this.state.tempMax} </h3>
             <h3> {this.state.windSpeed} </h3>
             <h3> {this.state.clouds} </h3>
             <h3> {this.state.sunrise} </h3>
             <h3> {this.state.sunset} </h3>
             </div>
              )
        }
      }
  
  
  export default ViewWeather;
  