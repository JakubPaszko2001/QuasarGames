import React, { useState, useEffect } from 'react';

const imageURL =
  'https://scontent-waw2-2.xx.fbcdn.net/v/t1.15752-9/484433045_1383213463009991_8171885387272722301_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_ohc=tBE0XOeXGaEQ7kNvgG9vYvW&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&oh=03_Q7cD1wEgomG0qoE5iSn_GbuC_hGVJKpZnNImDQKEkuXM3hxaFg&oe=68029065';

const TOTAL_SLIDES = 7;

export default function CustomCarousel() {
  const [index, setIndex] = useState(0);

  const handleScroll = (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      setIndex((prev) => Math.min(prev + 1, TOTAL_SLIDES - 3));
    } else {
      setIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-black">
      <h1 className="text-5xl text-[#b9935b] kranky-regular md:text-7xl mb-10">GALLERY</h1>

      <div
        className="relative w-[300px] h-[600px] overflow-hidden"
        style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)' }}
      >
        <div
          className="transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateY(-${index * 150}px)`,
          }}
        >
          {[...Array(TOTAL_SLIDES)].map((_, i) => (
            <div
              key={i}
              className="h-[250px] -mb-[100px] rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={imageURL}
                alt={`slide-${i}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
