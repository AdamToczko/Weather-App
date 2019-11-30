import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import ViewWeather from './components/ViewWeather';
import SearchCity from './components/SearchCity';

function App() {
  return (
    <div className="App">
      {/* <div className="AppShadow"> */}
      <ViewWeather />
      <SearchCity />
      
      {/* </div> */}
    </div>
  );
}

export default App;
