import React from 'react';

const Weather = (props) => {

  return (
    <div>
      <h2>현재위치 : {props.weather && props.weather.name}</h2>
      <h3>현재기온 : {props.weather && props.weather.main.temp}°C</h3>
    </div>
  );
};

export default Weather;