// src/App.js
import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloudSun, faCloud, faCloudShowersHeavy, faSnowflake, faCloudRain, faPhone, faBars } from '@fortawesome/free-solid-svg-icons';
function Home() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=26.96546281915211&lon=33.883077697384714&appid=f1130b3524feefd0549671bf69edc578');
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  const kelvinToCelsius = (temp) => (temp - 273.15).toFixed(2);

  const getWeatherIcon = (weatherCode) => {
    switch (weatherCode) {
      case '01d':
        return faSun;
      case '02d':
        return faCloudSun;
      case '03d':
      case '04d':
        return faCloud;
      case '09d':
      case '10d':
        return faCloudRain;
      case '11d':
        return faCloudShowersHeavy;
      case '13d':
        return faSnowflake;
      default:
        return faSun;
    }
  };

  return (
      <div className="Home">
        <div className='navBar'>
          <nav className="navbar navbar-expand-sm fixed-top">
            <ul className="navbar-nav">
              <li className="nav-item">
                <img src='logo.jpg' className='rounded' alt='Logo' width="100" height="70"></img>
              </li>
              <li className="nav-items">
                {weather ? (
                  <div className="weather-info  align-items-center text-white ml-auto">
                    <FontAwesomeIcon icon={getWeatherIcon(weather.weather[0].icon)} size="2x" />
                    <div>{weather.weather[0].description}</div>
                    <div>{kelvinToCelsius(weather.main.temp)}°C</div>
                  </div>
                ) : (
                  <div className="text-white ml-auto">Loading weather data...</div>
                )}
              </li>
              <li className="nav-item">
                <FontAwesomeIcon icon={faPhone} size="lg" />
              </li>
              <li className="nav-item">
                <button type='button' className="btn">BOOK NOW</button>
              </li>
              <li className="nav-item">
                <h5>Menu</h5>
              </li>
              <li className="nav-item">
                <FontAwesomeIcon icon={faBars} size="lg" />
              </li>
            </ul>
          </nav>
        </div>
        <div className="container-fluid">
          <div className='row'>
            <div className='col-md-4'>
              <img src='woman.jpg' className='rounded' alt='Woman' width="400" height="350"></img>
            </div>
            <div className='col-md-6'>
              <h1> The place we call home</h1>
              <h4> Makadi Heights is a town built over 3.4 million square 
                meters planned for development, with an elevation 
                reaching 78 meters above sea level guaranteeing 
                magnificent panoramic sea views residential units.
                Envisioned as a comprehensive town. </h4>
              <button type='btn'style={{justifyContent:"left"}}>DOWNLOAD BROCHURE</button> 
              <button type='btn'>SHOW MASTER PLAN</button> 
            </div>
          </div>
        </div>
      </div>

  );
}

export default Home;
