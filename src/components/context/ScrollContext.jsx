import React, { createContext, useState, useEffect } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollSnapActive, setIsScrollSnapActive] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Update isScrolled based on scroll position
      if (currentScrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleScrollSnap = () => setIsScrollSnapActive((prev) => !prev);

  return (
    <ScrollContext.Provider value={{ scrollY, isScrolled, isScrollSnapActive, toggleScrollSnap }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContext;
