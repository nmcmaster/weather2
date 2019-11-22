import React, { useState, useEffect } from "react";
import axios from "axios";
import loadingRain from "../img/rain.gif";

function Forecast(props) {
  const [forecast, setForecast] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const apiKey = "356f20acf9fbabbec028857322a686d7";
  const baseUrl = "http://api.weatherstack.com/current?access_key=";
  let zipCode = props.forecastZip;

  const urlToFetch = baseUrl + apiKey + "&query=" + zipCode;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(urlToFetch);
      setForecast(result);
      setIsLoading(false);
      console.log(result);
    };
    fetchData();
  }, [urlToFetch]);

  return (
    <div>
      {isLoading ? (
        <div className="w-1/3 flex justify-center text-center mx-auto">
          <div><img src={loadingRain} alt="loading" />
          <p>Getting your weather...</p></div>
        </div>
      ) : (
        <div>
          <p>
            You requested weather for zip code {forecast.data.request.query}{" "}
            which is in {forecast.data.location.name},{" "}
            {forecast.data.location.region}, {forecast.data.location.country}.
          </p>
          <p>
            The temperature is {forecast.data.current.temperature} degrees
            Fahrenheit. It's {forecast.data.current.weather_descriptions[0]},
            the wind speed is {forecast.data.current.wind_speed}, and the
            humidity is {forecast.data.current.humidity}, so it feels like{" "}
            {forecast.data.current.feelslike} degrees.
          </p>
        </div>
      )}
    </div>
  );
}

export default Forecast;
