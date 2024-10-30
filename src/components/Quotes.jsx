import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const AnimatedTypewriter = () => {
  return (
    <div className="typewriter-container max-w-full max-h-max grid place-items-center md:min-h-[80vh] min-h-[70vh] font-default" >
      <div className="relative text-center md:max-w-lg max-w-full px-4 md:px-0">
      {/* Typewriter Effect */}
      <span className="relative md:font-bold font-semibold text-2xl md:text-4xl text-white">
        <Typewriter
          words={[
            '“What keeps me alive in this world is neither bodily organs nor muscles — its my soul.” ',
             '"Sometimes you must hurt to know, fall to grow, lose to gain, because lifes greatest lessons are learned through pain."', 
             '"If you win, you live. If you lose, you die. If you don’t fight, you can’t win!"'
            ]}
          loop={true}
          cursor= {true} // Disable the default blinking cursor
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={1000}
          // onType={handleType} // Trigger function on each letter typed
        />
      </span>
      </div>
    </div>
  );
};

export default AnimatedTypewriter;
