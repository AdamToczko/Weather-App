import React from 'react';
import './App.css';
import axios from "axios";
import ViewWeather from './components/ViewWeather';
import SearchCity from './components/SearchCity';
import Clock from './components/Clock'

class App extends React.Component {
  
  state = {
    value:'',
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
    error: false,
    country: '',
    dataNotLoaded: true,
    }

    onInputChange =(event) => {
      const {value} = event.target
  
      this.setState({value: value})
  
      // console.log({value});
  }

  

    handleSubmit = e => {
		e.preventDefault();

      axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&units=metric&appid=05508bb378ad891b493b0c886cca7a57`)
        .then((response) => {
          return response.data})
          .then(data => {
            this.setState(state => ({
              dataNotLoaded: false,
                error: false,
                city:state.value,
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
                country: data.sys.country,
            }))
          })
        .catch(error => { console.log(error)
              this.setState(prevState => ({
                error: true,
                city: prevState.value
              })) 
        })
    }
  


  render() {

    
  return (
    
    <div className="App">
      <div className="AppShadow">

        <div className="AppHeader">
        <h3>Your current time:</h3>
        <Clock />
        <SearchCity 
        value={this.state.value}
        change={this.onInputChange}
        submit={this.handleSubmit}
        />
        </div>
      <div className="AppFooter">
      
      <ViewWeather 
      weather={this.state}
      imBusy={this.state}
      
      />
      </div>
      </div>
     
      
    </div>
  );
}
}

export default App;
