import React from 'react';
import Trailer_Abyss from '../assets/Abyss-Trailer.webm';
import Stop_Klatka from '../assets/Stop_Klatka_Mobile.webp';
const Main_Page = () => {
  return (
    <div className="relative inset-0 w-full h-screen flex justify-center items-center">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={Stop_Klatka}
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
