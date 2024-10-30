import React, { useState, useEffect } from 'react';
import background1 from '../assets/images/content/tinified/Group 38.svg';
import background2 from '../assets/images/content/tinified/background-2.png';
import background3 from '../assets/images/content/tinified/bg-3.png';
import background4 from '../assets/images/content/tinified/bg-5.png';
import Quotes from '../components/Quotes';
import ScrollButton from '../components/Buttons/ScrollButton';
import Dialog  from '../components/Dialog'
import Navbar from '../components/layout/Navbar';
// import ScrollEffect from '../components/ScrollEffect';

const backgroundImages = [background1, background2, background3, background4];

const HomePage = ({head = 'Find your Favourite Quotes in Real Time', text = 'Get all the quotes from your Favourite characters and Anime with one'}) => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    // Preload images
    backgroundImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Change background image every 5 seconds
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="container-main  scroll-smooth">
        <section
          className="relative w-full h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: `url(${backgroundImages[backgroundIndex]})`,
            transition: 'background-image 0.5s ease-in-out', // Smooth background change
          }}
        >
          {/* Overlay Layer */}
          <div className="absolute inset-0 bg-black opacity-50 pointer-events-none" />
          {/* Main Content */}
          <div className=" relative ">
            {/* <Navbar /> */}
            <Navbar/>
            <Quotes />
            <ScrollButton />
          </div>
        </section>
          {/* Extra Content Below */}
        <section className="h-screen max-w-4xl mx-auto py-20">
          <main className=" flex flex-col justify-center items-center pt-16">
            <div className=" text-center">
              <h1 className=' font-bold text-6xl text-gray-700 pb-3'>{head}</h1>
              <p className=" font-normal text-2xl text-zinc-500">{text} <span className=" text-yellow-400 pr-2 font-semibold">click</span> </p>
            </div>
            {/* From MUI Edited by Fats-CMD using chatgpt */}
            <Dialog />
          </main>
        </section>
      </main>
      {/* <ScrollEffect /> */}
    </> 
  );
};

export default HomePage;
