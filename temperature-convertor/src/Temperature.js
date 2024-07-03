import React, { useState, useEffect } from 'react';
import './Temperature.css'; // Import your CSS file

function TemperatureConverter() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState((0 * 9/5 + 32).toFixed(2));
  const [kelvin, setKelvin] = useState((0 + 273.15).toFixed(2));

  const handleCelsiusChange = (event) => {
    const value = parseFloat(event.target.value);
    setCelsius(value);
    setFahrenheit((value * 9/5 + 32).toFixed(2));
    setKelvin((value + 273.15).toFixed(2));
  };

  const handleFahrenheitChange = (event) => {
    const value = parseFloat(event.target.value);
    setFahrenheit(value);
    setCelsius(((value - 32) * 5/9).toFixed(2));
    setKelvin((((value - 32) * 5/9) + 273.15).toFixed(2));
  };

  const handleKelvinChange = (event) => {
    const value = parseFloat(event.target.value);
    setKelvin(value);
    setCelsius((value - 273.15).toFixed(2));
    setFahrenheit(((value - 273.15) * 9/5 + 32).toFixed(2));
  };

  return (
    <div className="converter-container">
      <h2>Temperature Converter</h2>
      <div className='container-box'>
        <label>
          Celsius:
        </label>
        <input
          type="text"
          value={celsius}
          onChange={handleCelsiusChange}
        />
      </div>
      <div className='container-box'>
        <label>
          Fahrenheit:
        </label>
        <input
          type="text"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </div>
      <div className='container-box'>
        <label>
          Kelvin:
        </label>
        <input
          type="text"
          value={kelvin}
          onChange={handleKelvinChange}
        />
      </div>
    </div>
  );
}

export { TemperatureConverter };
