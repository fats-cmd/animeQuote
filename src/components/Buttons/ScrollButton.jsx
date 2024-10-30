import React from 'react';
import { ArrowDownward } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ScrollButton = () => {
  return (
    <>
      {/* Framer motion for smooth effect and animation */}
      <motion.button
        type="button"
        className="text-white flex justify-center items-center focus:outline-none w-full"
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: [0, 10, -10, 0], opacity: [1, 0.5, 1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ArrowDownward className="w-9 h-9" />
      </motion.button>
    </>
  );
}

export default ScrollButton;
