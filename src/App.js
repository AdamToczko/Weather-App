import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import ViewWeather from './components/ViewWeather';

function App() {
  return (
    <div className="App">
      {/* <div className="AppShadow"> */}
      <ViewWeather />
      
      {/* </div> */}
    </div>
  );
}

export default App;
