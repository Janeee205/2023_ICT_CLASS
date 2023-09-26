import { useState, useEffect } from 'react';
import './App.css';
import Weather from './component/Weather';


function App() {

  let [weather, setWeather] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {

      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeather(lat, lon);
    });
  }

  const getWeather = async (lat, lon) => {
    let apiKey = '3094e2fbb3d7b3b05c4be37e16d470bd';
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    setWeather(data)
  }

  // useEffect => 첫번째 UI 렌더 후에 작동
  // html이 랜더링 다 되면 즉시 이것을 실행하라
  useEffect(() => {
    getCurrentLocation();
  }, [])


  return (
    <div className="App">

      <Weather weather={weather} />

    </div>
  );
}

export default App;
