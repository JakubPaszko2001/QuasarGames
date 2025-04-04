import React from 'react';
import Trailer_Abyss_Mobile from '../assets/Trailer-Mobile.mp4';
import Trailer_Abyss from '../assets/Abyss-Trailer.mp4';
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
      >
        <source src={Trailer_Abyss} type="video/mp4" />
      </video>
      <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-black/90 to-transparent xl:hidden"></div>
    </div>
  );
};


export default Main_Page;
