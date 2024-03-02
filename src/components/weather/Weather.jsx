import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../loading/Loading";

import "./Weather.scss";

const Weather = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  const [weatherData, setWeatherData] = useState({});
  async function getData(x) {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${x}&appid=264dd0a7abbe75e34c56b1bbdc08b685&units=metric`
      );
      setWeatherData(data);
      if (error) {
        setError(false);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);
  function vrk(x) {
    const time = new Date(x);
    const hours = time.getHours();
    const minutes = time.getMinutes();
    return `${hours}:${minutes}`;
  }

  return (
    <div className="weather">
      <div className="weather-search">
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="text"
        />
        <button
          onClick={() => {
            if (value.trim()) {
              getData(value);
            }
            setValue("");
          }}
        >
          click me
        </button>
      </div>
      <div className="weather-result">
        <div>
          {loading && <Loading />}
          {error ? (
            <h1>not found</h1>
          ) : (
            <>
              {!loading && (
                <>
                  <h1>{weatherData && weatherData.name}</h1>
                  <p>
                    feels_like:
                    {weatherData &&
                      weatherData.main &&
                      weatherData.main.feels_like}
                  </p>
                  <p>
                    temp:
                    {weatherData && weatherData.main && weatherData.main.temp}
                  </p>
                  {weatherData && weatherData.weather && (
                    <img
                      src={`https://openweathermap.org/img/wn/${
                        weatherData &&
                        weatherData.weather &&
                        weatherData.weather[0].icon
                      }.png`}
                      alt=""
                    />
                  )}
                  <p>
                    sunrise:{" "}
                    {weatherData &&
                      weatherData.sys &&
                      vrk(weatherData.sys.sunrise)}
                  </p>
                  <p>
                    sunset:{" "}
                    {weatherData &&
                      weatherData.sys &&
                      vrk(weatherData.sys.sunset)}
                  </p>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
