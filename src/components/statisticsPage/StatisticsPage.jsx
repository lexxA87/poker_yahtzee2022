import React from "react";
import { motion } from "framer-motion";

function StatisticsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      StatisticsPage
    </motion.div>
  );
}

export default StatisticsPage;
