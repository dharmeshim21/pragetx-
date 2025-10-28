"use client";
import { motion } from "framer-motion";
import React from "react";

const AnimationWrapper = ({ children, direction = "up", delay = 0 }) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, delay },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"          // 👈 triggers when scrolled into view
      viewport={{ once: true, amount: 0.2 }} // once=true = only 1st time
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
