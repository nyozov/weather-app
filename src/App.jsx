import "./App.css";
import { useState } from "react";
import ClearVideo from "./components/ClearVideo";
import RainVideo from "./components/RainVideo";
import SnowVideo from "./components/SnowVideo";
import CloudVideo from "./components/CloudVideo";
import useVisualMode from "./hooks/useVisualMode";

import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ErrorScreen from "./components/ErrorScreen";
const ERROR = "Error";

const api = {
  key: process.env.REACT_APP_WEATHER_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const { mode, transition } = useVisualMode("");
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [searchError, setSearchError] = useState("");

  const searchEnter = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          setSearchError("");
          if (result.weather !== undefined) {
            transition(result.weather[0].main);
          } else {
            setSearchError(ERROR);
          }
        });
    }
  };
  const search = () => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setQuery("");
        setSearchError("");
        if (result.weather !== undefined) {
          transition(result.weather[0].main);
        } else {
          setSearchError(ERROR);
        }
      });
  };

  return (
    <div
      className='app'
    >
      <main>
        <div className="search-box">
          <Paper sx={{ display: "flex", alignItems: "center" }}>
            {" "}
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search City"
              type="text"
              className="search-bar"
              fullWidth
              autoFocus
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onSubmit={search}
              onKeyPress={searchEnter}
            />
            <IconButton
              sx={{ p: "10px" }}
              onClick={() => {
                search();
              }}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>

        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
            </div>
            <div className="weather-box">
              <div className="temp">
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={"weather-icon"}
                />

                <div className="temp-text">
                  {Math.round(weather.main.temp)}°
                </div>
              </div>
              <div className="weather">
                {weather.weather[0].main}
                <br />
                H: {Math.round(weather.main.temp_max)}° L:{" "}
                {Math.round(weather.main.temp_min)}°
                <br />
                Humidty: {weather.main.humidity}%
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {mode === "" && <ClearVideo />}
        {mode === "Clear" && <ClearVideo />}
        {mode === "Rain" && <RainVideo />}
        {mode === "Snow" && <SnowVideo />}
        {mode === "Clouds" && <CloudVideo />}
        {searchError === "Error" && <ErrorScreen />}
      </main>
    </div>
  );
}

export default App;
