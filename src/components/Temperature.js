import React from "react";
import { motion } from "framer-motion";

function Temperature(props) {
  let tempUnit;
  if (props.units === "M") {
    tempUnit = "C";
  }
  if (props.units === "E") {
    tempUnit = "F";
  }
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ color: "#bdbdbd" }}
      key={props.temperature}
    >
      <div>{props.temperature}</div>
      <div className="text-xs -mt-4">°{tempUnit}</div>
    </motion.div>
  );
}

export default Temperature;
