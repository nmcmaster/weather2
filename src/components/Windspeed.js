import React from "react";
import { motion } from "framer-motion";

function Windspeed(props) {
  if (props.units === "M") {
    return (
      <motion.span
        key="windspeedM"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {props.windspeed} km/h
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
        {props.windspeed} m/h
      </motion.span>
    );
  }
}

export default Windspeed;
