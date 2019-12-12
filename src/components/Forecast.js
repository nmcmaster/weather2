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
    weather_descriptions: ["Sunny"],
    wind_speed: 0,
    //    wind_degree: 349,
    //  wind_dir: "N",
    //    pressure: 1010,
    precip: 0,
    humidity: 90,
    cloudcover: 0,
    feelslike: 13,
    uv_index: 4,
    visibility: 16
  }
};

function Forecast(props) {
  const [forecast, setForecast] = useState(stub);
  const [isLoading, setIsLoading] = useState(true);

  const apiKey = "356f20acf9fbabbec028857322a686d7";
  const baseUrl = "http://api.weatherstack.com/current?access_key=";
  //  let zipCode = 10025;
  let zipCode = props.forecastZip;

  const urlToFetch = baseUrl + apiKey + "&query=" + zipCode;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(urlToFetch);
      setForecast(result.data);
      setIsLoading(false);
      console.log(result.data);
    };
    fetchData();
  }, [urlToFetch]);

  return (
    <div>
      {isLoading ? (
        <div className="w-1/3 flex justify-center text-center mx-auto bg-gray-100 rounded-b-lg pb-3">
          <div>
            <img src={loadingRain} alt="loading" />
            <p>Getting your weather...</p>
          </div>
        </div>
      ) : (
        <div className="font-serif px-4 bg-gray-100 rounded-b-lg pb-3">
          <div className="flex justify-between mb-3">
            <p className="w-1/2 pt-8 text-sm">
              It's{" "}
              <span className="font-bold">
                {forecast.current.weather_descriptions[0].toLowerCase()}
              </span>{" "}
              in {forecast.location.name}, {forecast.location.region} as of{" "}
              {forecast.current.observation_time}.{" "}
              {/* add utc offset calculation*/}
            </p>
            <p className="text-6xl mr-4 bg-gray-200 rounded-b-full pb-2 px-2">
              <div>{forecast.current.temperature}</div>
              <div className="text-xs -mt-5 text-center">Celsius</div>
            </p>
          </div>
          <p className="text-sm mb-2">
            The humidity is {forecast.current.humidity}, and the wind speed is{" "}
            {forecast.current.wind_speed}, so it feels like{" "}
            {forecast.current.feelslike}. The precipitation is{" "}
            {forecast.current.precip}.
          </p>
          <p className="text-sm my-2">
            You requested weather for zip code {props.forecastZip}, .
          </p>
        </div>
      )}
    </div>
  );
}

export default Forecast;
