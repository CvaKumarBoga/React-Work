import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [weather, setWeather] = useState("");
  const [input, setInput] = useState();

  const inputHandler=(e) =>{
    setInput(e.target.value);
  }

  const searchHandler = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=f41e4f8196114132aeb45457212107&q=${input}&aqi=no`
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=f41e4f8196114132aeb45457212107&q=India&aqi=no"
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {weather && (
          <body>
        <div>
          <h1>Weather Information</h1>
          
          <input id="textid" onChange={inputHandler} type="text"></input>
          <button id="buttonid" onClick={searchHandler}>Search Weather</button>
          <div class="card container">
          <p>{weather.location.name}</p>
          <p>{weather.location.country}</p>
          <p>{weather.location.region}</p>
          <p>{weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="" />
        </div>
        </div>
        </body>
        )}
      </header>
    </div>
  );
}
export default App;
