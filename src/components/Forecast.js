import React, { useState, useEffect } from "react";
import axios from "axios";
import loadingRain from "../img/rain.gif";
import ForecastBody from "./ForecastBody";
import IsLoading from "./IsLoading";
import Error from "./Error";
// import { stub } from "./stub";

var convert = require("convert-units");

const desktopStyle = "";

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
    temperature: 9,
    weather_code: 113,
    weather_icons: [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
    ],
    weather_descriptions: ["Sunny"],
    wind_speed: 10,
    //    wind_degree: 349,
    //  wind_dir: "N",
    //    pressure: 1010,
    precip: 13,
    humidity: 90,
    cloudcover: 0,
    feelslike: 13,
    uv_index: 4,
    visibility: 16
  }
};

function Forecast(props) {
  const [forecast, setForecast] = useState(stub);
  const [isLoading, setIsLoading] = useState(true); // set back to true
  const [units, setUnits] = useState("E");
  const [temperature, setTemperature] = useState(stub.current.temperature);
  const [windspeed, setWindspeed] = useState(stub.current.wind_speed);
  const [feelsLike, setFeelsLike] = useState(stub.current.feelslike);
  const [precip, setPrecip] = useState(stub.current.precip);
  const [isError, setIsError] = useState(false);

  const apiKey = "356f20acf9fbabbec028857322a686d7";
  const baseUrl = "http://api.weatherstack.com/current?access_key=";
  //  let zipCode = 10025; // request English units, maybe local time will be right then.
  let zipCode = props.forecastZip;
  const urlToFetch = baseUrl + apiKey + "&query=" + zipCode + "&units=f";

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(urlToFetch);
        setForecast(result.data);
        setTemperature(result.data.current.temperature);
        console.log(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [urlToFetch]);

  function unitConvert() {
    if (units === "M") {
      setUnits("E");
      windSpeedConverter();
      feelsLikeConverter();
      precipConverter();
      temperatureConverter();
    }
    if (units === "E") {
      setUnits("M");
      windSpeedConverter();
      feelsLikeConverter();
      precipConverter();
      temperatureConverter();
    }
  }

  function temperatureConverter() {
    if (units === "E") {
      setTemperature(
        convert(temperature)
          .from("F")
          .to("C")
      );
    }
    if (units === "M") {
      setTemperature(
        convert(temperature)
          .from("C")
          .to("F")
      );
    }
  }

  function feelsLikeConverter() {
    if (units === "E") {
      setFeelsLike(
        convert(feelsLike)
          .from("F")
          .to("C")
      );
    }
    if (units === "M") {
      setFeelsLike(
        convert(feelsLike)
          .from("C")
          .to("F")
      );
    }
  }

  function windSpeedConverter() {
    if (units === "E") {
      setWindspeed(
        convert(windspeed)
          .from("m/h")
          .to("km/h")
      );
    }
    if (units === "M") {
      setWindspeed(
        convert(windspeed)
          .from("km/h")
          .to("m/h")
      );
    }
  }

  function precipConverter() {
    if (units === "E") {
      setPrecip(
        convert(precip)
          .from("in")
          .to("mm")
      );
    }
    if (units === "M") {
      setPrecip(
        convert(precip)
          .from("mm")
          .to("in")
      );
    }
  }

  return (
      <div>
        {isLoading ? (
          <IsLoading />
        ) : (
          <>
          {isError ? ( <Error /> ):(
          <ForecastBody
            forecast={forecast}
            isLoading={isLoading}
            units={units}
            temperature={temperature}
            windspeed={windspeed}
            feelsLike={feelsLike}
            precip={precip}
            unitConvert={unitConvert}
            forecastZip={props.forecastZip}
          />
        )
        }
        </>
        )}
      </div>
  );
}

export default Forecast;
