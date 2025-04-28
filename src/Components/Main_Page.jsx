import React, { useState, useEffect } from 'react';
import Trailer_Abyss from '../assets/Abyss-Trailer.webm';
import Stop_Klatka from '../assets/Stop_Klatka_Mobile.webp';
import Main_Background from '../assets/Main_Background.webp';

const Main_Page = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 640);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const selectedPoster = isLargeScreen ? Main_Background : Stop_Klatka;

  return (
    <div id="main-page" className="relative inset-0 w-full h-screen flex justify-center items-center">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={selectedPoster}
        preload="auto"
        loading="eager"
      >
        <source src={Trailer_Abyss} type="video/webm" />
      </video>

      {/* Gradient dolny */}
      <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-black/90 to-transparent xl:hidden"></div>

      {/* SCROLL DOWN animation */}
        <div className="absolute bottom-28 xl:bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
      {/* Myszka */}
          <div className="w-8 h-14 border-2 border-white rounded-full flex justify-center items-start p-1 mb-3">
            <div className="w-2 h-2 rounded-full bg-white animate-scrollDot" />
          </div>
      {/* Tekst */}
          <p className="text-white text-xs tracking-widest uppercase opacity-70 animate-pulse !mt-4">Scroll Down</p>
        </div>

    </div>
  );
};

export default Main_Page;
