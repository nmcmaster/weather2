import React from "react";
import { motion } from "framer-motion";

const Error = props => {
  return (
    <motion.div
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ type: "tween" }}
      className="bg-white w-1/3 text-center mx-auto"
    >
      Something went wrong.
    </motion.div>
  );
};

export default Error;
