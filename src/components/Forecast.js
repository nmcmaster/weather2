import React, { useState, useEffect } from "react";
import axios from "axios";

function Forecast(props) {
  const [forecast, setForecast] = useState(false);
  //  const [data, setData] = useState({ hits: [] });

  const apiKey = "099a76f4a161f8c95ec43e5a5064959b";
  const baseUrl = "http://api.weatherstack.com/current?access_key=";
  let zipCode = props.forecastZip;
  //  let weiruch = "https://hn.algolia.com/api/v1/search?query=redux";

  const urlToFetch = baseUrl + apiKey + "&query=" + zipCode;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(urlToFetch);
      setForecast(result);
      console.log();
    };
    fetchData();
  }, []);

  return (
    <div>
      {!forecast ? (
        <div>no result</div>
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
