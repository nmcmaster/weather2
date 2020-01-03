import React from "react";
import { motion } from "framer-motion";

function Precip(props) {
  let precip = props.precip;
  if (props.precip % 1 != 0) {
    precip = props.precip.toFixed(1);
  }
  if (precip.toString().slice(-2) === ".0") {
    precip = precip.toString().slice(0, -2);
  }
  let precipUnit;
  if (props.units === "E") {
    precipUnit = "in";
  }
  if (props.units === "M") {
    precipUnit = "mm";
  }
  return (
    <motion.span
      key={"precip" + precipUnit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {precip} {precipUnit}
    </motion.span>
  );
}

export default Precip;
