import React, { useState, useEffect } from "react";
import axios from "axios";
import loadingRain from "../img/rain.gif";

const stub = {
  request: {
       type: "City",
       query: "New York, United States of America",
       language: "en",
       unit: "m"
   },
   location: {
       name: "New York",
       country: "United States of America",
       region: "New York",
       lat: "40.714",
       lon: "-74.006",
       timezone_id: "America/New_York",
       localtime: "2019-09-07 08:14",
       localtime_epoch: 1567844040,
       utc_offset: "-4.0"
   },
   current: {
       observation_time: "12:14 PM",
       temperature: 13,
       weather_code: 113,
       weather_icons: [
           "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
       ],
       weather_descriptions: [
           "Sunny"
       ],
       wind_speed: 0,
       wind_degree: 349,
       wind_dir: "N",
       pressure: 1010,
       precip: 0,
       humidity: 90,
       cloudcover: 0,
       feelslike: 13,
       uv_index: 4,
       visibility: 16
   }
}

function Forecast(props) {
  const [forecast, setForecast] = useState(stub);
  const [isLoading, setIsLoading] = useState(false); // remember set back to true

  const apiKey = "356f20acf9fbabbec028857322a686d7";
  const baseUrl = "http://api.weatherstack.com/current?access_key=";
  let zipCode = 10025;
//  let zipCode = props.forecastZip;

//  const urlToFetch = baseUrl + apiKey + "&query=" + zipCode;
  //
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(urlToFetch);
  //     setForecast(result.data);
  //     setIsLoading(false);
  //     console.log(result.data);
  //   };
  //   fetchData();
  // }, [urlToFetch]);

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
            You requested weather for zip code {props.forecastZip}{" "}
            which is in {forecast.location.name},{" "}
            {forecast.location.region}, {forecast.location.country}.
          </p>
          <p>
            The temperature is {forecast.current.temperature} degrees
            Fahrenheit. It's {forecast.current.weather_descriptions[0]},
            the wind speed is {forecast.current.wind_speed}, and the
            humidity is {forecast.current.humidity}, so it feels like{" "}
            {forecast.current.feelslike} degrees.
          </p>
        </div>
      )}
    </div>
  );
}

export default Forecast;
