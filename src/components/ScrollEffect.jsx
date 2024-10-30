import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollEffect = () => {
  const { scrollYProgress } = useScroll();

  // Define the opacity and blur transformations based on scroll progress
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const blur = useTransform(scrollYProgress, [0, 1], ['20px', '0px']); // Change '20px' to your desired blur at start

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center">
      {/* Apply the motion.div with opacity and blur */}
      <motion.h1
        style={{ opacity, filter: `blur(${blur})` }}
        className="text-5xl font-bold text-white"
      >
        Scroll to Fade In and Clear
      </motion.h1>
      <motion.p
        style={{ opacity, filter: `blur(${blur})` }}
        className="mt-4 text-lg text-gray-300"
      >
        As you scroll down, this text will fade in and become clear.
      </motion.p>

      {/* Extra content to enable scrolling */}
      <div className="h-[200vh] bg-gray-900"></div>
    </div>
  );
};

export default ScrollEffect;
