import React from "react";
import { motion } from "framer-motion";

function Temperature(props) {
  return <motion.div className="relative text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ color: "white"}} key={props.temperature}>{props.temperature}</motion.div>;
}

export default Temperature;
