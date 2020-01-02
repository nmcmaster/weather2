import React from "react";
import { motion } from "framer-motion";

function Windspeed(props) {
  let windspeed;
  if (props.windspeed % 1 != 0) {
    windspeed = props.windspeed.toFixed(1);
  } else {
    windspeed = props.windspeed;
  }

  if (props.units === "M") {
    return (
      <motion.span
        key="windspeedM"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {windspeed} km/h
      </motion.span>
    );
  }

  if (props.units === "E") {
    return (
      <motion.span
        key="windspeedE"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {windspeed} m/h
      </motion.span>
    );
  }
}

export default Windspeed;
