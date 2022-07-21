import React from "react";
import { motion } from "framer-motion";

function RatingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      RatingPage
    </motion.div>
  );
}

export default RatingPage;
