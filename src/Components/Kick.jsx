import React from "react";
const Kick = () => {
  return (
    <div className="relative overflow-hidden w-full bg-black border-t-4 border-b-4 border-[#00CF73] h-16 flex items-center">
      {/* Kontener dla płynnie przesuwających się elementów */}
      <div className="flex min-w-[200%] animate-marquee">
        {/* Powielamy treść, aby animacja była płynna */}
        <div className="flex items-center justify-center gap-2 w-full font-custom">
          <h1 className="font-custom text-[#00CF73] font-bold text-xl">KICKSTARTER COMING SOON</h1>
        </div>
        <div className="flex items-center justify-center gap-2 w-full font-custom">
          <h1 className="font-custom text-[#00CF73] font-bold text-xl">KICKSTARTER COMING SOON</h1>
        </div>
      </div>
    </div>
  );
};

export default Kick;
