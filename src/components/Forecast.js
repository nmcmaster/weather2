import React, { useState, useEffect } from "react";
import axios from "axios";
import loadingRain from "../img/rain.gif";
import Temperature from "./Temperature";
import { motion, AnimatePresence } from "framer-motion";
import Windspeed from "./Windspeed";
import FeelsLike from "./FeelsLike";
import Precip from "./Precip";

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
  const [isLoading, setIsLoading] = useState(false); // set back to true
  const [units, setUnits] = useState("M");
  const [temperature, setTemperature] = useState(stub.current.temperature);
  const [windspeed, setWindspeed] = useState(stub.current.wind_speed);
  const [feelsLike, setFeelsLike] = useState(stub.current.feelslike);
  const [precip, setPrecip] = useState(stub.current.precip);

  const apiKey = "356f20acf9fbabbec028857322a686d7";
  const baseUrl = "http://api.weatherstack.com/current?access_key=";
  let zipCode = 10025;
  //  let zipCode = props.forecastZip;
  //
  // const urlToFetch = baseUrl + apiKey + "&query=" + zipCode;
  //
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(urlToFetch);
  //     setForecast(result.data);
  //     setIsLoading(false);
  //     setTemperature(result.data.current.temperature);
  //     console.log(result.data);
  //   };
  //   fetchData();
  // }, [urlToFetch]);

  function unitConvert() {
    if (units === "M") {
      setUnits("E");
      windSpeedConverter();
      feelsLikeConverter();
      precipConverter();
    }
    if (units === "E") {
      setUnits("M");
      windSpeedConverter();
      feelsLikeConverter();
      precipConverter();
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-1/3 py-3 flex justify-center text-center mx-auto bg-gray-100 rounded-b-lg pb-3"
        >
          <div>
            <img src={loadingRain} alt="loading" />
            <p className="font-serif text-sm mt-2">Getting your weather...</p>
          </div>
        </motion.div>
      ) : (
        <div className="font-serif px-4 bg-gray-100 rounded-b-lg pb-3 shadow">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-between mb-1"
          >
            <div className="w-1/2 pt-10 text-sm">
              It's{" "}
              <span className="font-bold">
                {forecast.current.weather_descriptions[0].toLowerCase()}
              </span>{" "}
              in {forecast.location.name}, {forecast.location.region} as of{" "}
              {forecast.current.observation_time}.{" "}
              {/* add utc offset calculation*/}
            </div>
            <div className="text-6xl mr-4 bg-gray-200 rounded-b-full pb-2 px-2 shadow">
              <Temperature temperature={temperature} units={units} />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm mb-2"
          >
            The humidity is {forecast.current.humidity}%, and the wind speed is{" "}
            <AnimatePresence>
              <Windspeed windspeed={windspeed} units={units} />
            </AnimatePresence>
            , so it feels like{" "}
            <AnimatePresence>
              <FeelsLike feelsLike={feelsLike} units={units} />
            </AnimatePresence>
            . The precipitation is{" "}
            <AnimatePresence>
              <Precip precip={precip} units={units} />
            </AnimatePresence>
            .
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm my-2"
          >
            You requested weather for zip code {props.forecastZip}, .
          </motion.div>
          <button onClick={unitConvert}>Change to Celsius/Metric</button>
        </div>
      )}
    </div>
  );
}

export default Forecast;
