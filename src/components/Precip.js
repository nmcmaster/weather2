import React from "react";
import { motion } from "framer-motion";

function Precip(props) {
  let precip;
  if (props.precip % 1 != 0) {
    precip = props.precip.toFixed(1);
  } else {
    precip = props.precip;
  }
  // if (precip.slice(-2) === ".0") {
  //   return precip.slice(-2, (precip.length - 2));
  // }

  if (props.units === "M") {
    return (
      <motion.span
        key="precipM"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {precip} mm
      </motion.span>
    );
  }

  if (props.units === "E") {
    return (
      <motion.span
        key="precipE"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {precip} in
      </motion.span>
    );
  }
}

export default Precip;
