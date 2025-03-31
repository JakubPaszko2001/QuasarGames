import React from 'react';
import Trailer_Abyss from '../assets/Trailer-Mobile.mp4';
const Main_Page = () => {
  return (
    <div className="relative inset-0 w-full h-screen">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={Trailer_Abyss} type="video/mp4" />
      </video>
      <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-black/90 to-transparent"></div>
    </div>
  );
};


export default Main_Page;
