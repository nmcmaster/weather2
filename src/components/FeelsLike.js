import React from "react";
import { motion } from "framer-motion";

function FeelsLike(props) {
  let feelsLike;
  if (props.feelsLike % 1 != 0) {
    feelsLike = props.feelsLike.toFixed(1);
  } else {
    feelsLike = props.feelsLike;
  }

  if (props.units === "M") {
    return (
      <motion.span
        key="feelsLikeM"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {feelsLike} °F
      </motion.span>
    );
  }

  if (props.units === "E") {
    return (
      <motion.span
        key="feelsLikeE"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {feelsLike} °C
      </motion.span>
    );
  }
}

export default FeelsLike;
