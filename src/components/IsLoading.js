import React from "react";
import { motion } from "framer-motion";
import loadingRain from "../img/rain.gif";

function IsLoading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-1/3 py-3 flex justify-center text-center mx-auto bg-gray-100 rounded-b-lg pb-3"
    >
      <div>
        <img src={loadingRain} alt="loading" />
        <p className="font-serif text-sm mt-2">Getting your weather...</p>
      </div>
    </motion.div>
  );
}

export default IsLoading;
