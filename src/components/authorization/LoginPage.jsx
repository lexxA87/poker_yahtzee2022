import React from "react";
import { motion } from "framer-motion";

function LoginPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      LoginPage
    </motion.div>
  );
}

export default LoginPage;
