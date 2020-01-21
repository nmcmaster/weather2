import React from "react";
import LocalTime from "./LocalTime";
import Temperature from "./Temperature";
import Windspeed from "./Windspeed";
import FeelsLike from "./FeelsLike";
import Precip from "./Precip";
import { motion, AnimatePresence } from "framer-motion";

const ForecastBody = ({
  forecast,
  isLoading,
  units,
  temperature,
  windspeed,
  feelsLike,
  precip,
  unitConvert,
  forecastZip
}) => {
  return (
    <motion.div
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ type: "tween" }}
      className="font-serif px-4 bg-gray-100 rounded-b-lg pb-6 mx-auto shadow sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 "
    >
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
          <LocalTime time={forecast.location.localtime} />.{" "}
        </div>
        <div className="text-6xl mr-4 bg-gray-200 rounded-b-full pb-2 px-2 shadow">
          <AnimatePresence>
            <Temperature temperature={temperature} units={units} />
          </AnimatePresence>
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
        You requested weather for zip code {forecastZip}, .
      </motion.div>
      <button onClick={unitConvert}>Change to Celsius/Metric</button>
    </motion.div>
  );
};

export default ForecastBody;
