import React from "react";
import { motion } from "framer-motion";

function Windspeed(props) {
  let windspeed;
  if (props.windspeed % 1 != 0) {
    windspeed = props.windspeed.toFixed(1);
  } else {
    windspeed = props.windspeed;
  }
  let tempUnit;
  if (props.units === "E") {
    tempUnit = "m/h";
  }
  if (props.units === "M") {
    tempUnit = "km/h";
  }
  return (
    <motion.span
      key={"windspeed" + tempUnit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {windspeed} {tempUnit}
    </motion.span>
  );
}

export default Windspeed;
