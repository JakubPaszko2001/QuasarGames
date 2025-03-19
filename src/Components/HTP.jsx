import React, { useState } from "react";
import ReactPlayer from "react-player";

const HTP = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "2LPd07zzT9g"; // ID wideo z linku

  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="text-4xl font-bold !my-12 text-[#2F1C8A]">HOW TO PLAY</h1>

      <div className="relative w-full max-w-2xl cursor-pointer">
        {isPlaying ? (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            playing={true}
            controls={true}
            width="100%"
            // height="400px"
          />
        ) : (
          <div
            className="relative w-full"
            onClick={() => setIsPlaying(true)}
          >
            {/* Miniatura z YouTube */}
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Miniatura wideo"
              className="w-full rounded-lg"
            />
            {/* Przycisk Play */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black bg-opacity-50 rounded-full p-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
                  alt="Play"
                  className="w-16"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-full bg-[#181639]/50 border-y-1 border-[#27204E] border-opacity-100 rounded-[20px] text-white flex flex-col !px-6 !py-4 !mt-14">
            <p2 className="text-center text-lg font-serif !py-8">In the endless and desolate deserts of the world, the god Abyss reigns, surrounded by darkness and mystery. It's a place where magic blends with reality, creating a land full of dangers and surprises. </p2>
        </div>
    </div>
  );
};

export default HTP;
