import React from "react";
import { motion } from "framer-motion";

function RegistrationPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      RegistrationPage
    </motion.div>
  );
}

export default RegistrationPage;
