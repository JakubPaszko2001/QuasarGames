import React, { useState, useEffect } from 'react';
import Trailer_Abyss from '../assets/Abyss-Trailer.webm';
import Stop_Klatka from '../assets/Stop_Klatka_Mobile.webp';
import Main_Background from '../assets/Main_Background.webp';

const Main_Page = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // 1024px = Tailwind 'lg'
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const selectedPoster = isLargeScreen ? Main_Background : Stop_Klatka;

  return (
    <div className="relative inset-0 w-full h-screen flex justify-center items-center">
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
      <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-black/90 to-transparent xl:hidden"></div>
    </div>
  );
};

export default Main_Page;
