import React from "react";
import { motion } from "framer-motion";

function Temperature(props) {
  let tempUnit;
  if (props.units === "E") {
    tempUnit = "°F";
  }
  if (props.units === "M") {
    tempUnit = "°C";
  }
  let temperature = props.temperature;
  if (temperature % 1 != 0) {
    temperature = temperature.toFixed(1);
  }
  if (temperature.toString().slice(-2) === ".0") {
    temperature = temperature.toString().slice(0, -2);
  }
    return (
      <motion.div
        className="text-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ type: "tween" }}
        whileHover={{ color: "#bdbdbd" }}
        key={"mainTemp"+props.units}
      >
        <div>{temperature}</div>
        <div className="text-xs -mt-4">
          {tempUnit}
        </div>
      </motion.div>
    );
}

export default Temperature;
