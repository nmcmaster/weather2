import React from "react";
import { motion } from "framer-motion";
import loadingRain from "../img/rain.gif";

function Loading() {
  return (
    <motion.div
    initial={{ y: -200, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: "tween" }}
      className="w-1/3 py-3 flex justify-center text-center mx-auto bg-gray-100 rounded-b-lg pb-3"
    >
      <div>
        <img src={loadingRain} alt="loading" />
        <p className="font-serif text-sm mt-2">Getting your weather...</p>
      </div>
    </motion.div>
  );
}

export default Loading;
