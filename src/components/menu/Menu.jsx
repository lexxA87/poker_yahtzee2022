import React from "react";
import MenuButtons from "./MenuButtons";
import { motion } from "framer-motion";

function Menu() {
  return (
    <motion.div
      className="d-grid gap-4 
    col-12 col-sm-8 col-md-6 
    col-lg-3 mx-auto position-absolute 
    top-50 start-50 translate-middle"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MenuButtons />
    </motion.div>
  );
}

export default Menu;
