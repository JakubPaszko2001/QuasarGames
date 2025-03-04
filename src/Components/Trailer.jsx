import React from 'react';
import Trailer_Abyss from '../assets/Trailer-Mobile.mp4';

const Trailer = () => {
  return (
    <div className="relative inset-0 w-screen h-screen overflow-hidden">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={Trailer_Abyss} type="video/mp4" />
      </video>
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
    </div>
  );
};

export default Trailer;
