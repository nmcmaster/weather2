import React from "react";
import { motion } from "framer-motion";

function FeelsLike(props) {
  let feelsLike = props.feelsLike;
  if (feelsLike % 1 != 0) {
    feelsLike = feelsLike.toFixed(1);
  }
  if (feelsLike.toString().slice(-2) === ".0") {
    feelsLike = feelsLike.toString().slice(0, -2);
  }
  let feelsLikeUnit;
  if (props.units === "E") {
    feelsLikeUnit = "°F";
  }
  if (props.units === "M") {
    feelsLikeUnit = "°C";
  }

  return (
    <motion.span
      key={"feelsLikeM" + feelsLikeUnit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {feelsLike} {feelsLikeUnit}
    </motion.span>
  );
}

export default FeelsLike;
