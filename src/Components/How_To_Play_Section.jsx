import React, { useState } from "react";
import ReactPlayer from "react-player";
import ra from "../assets/ra.png";
import koszary from "../assets/koszary.png";
import emblemat from "../assets/Emblemat_Pustynia.png";
import HTP_Background from "../assets/HTP_Background.png";
import Play_button from "../assets/play-button.png";

const How_To_Play_Section = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoId = "Sbr0_bkzPB8"; // Poprawiony ID wideo

  return (
    <div className="flex flex-col w-full items-center justify-center relative">
      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          {/* Przycisk zamknięcia – PRAWY GÓRNY RÓG */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-60 hover:bg-opacity-80 px-4 py-2 rounded-full transition"
            aria-label="Close video"
          >
            ✕
          </button>

          {/* Kontener z filmem */}
          <div className="relative w-full max-w-4xl aspect-video">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              playing={true}
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}

      {/* EMBLEMAT */}
      <div className="text-center flex justify-center items-center !my-12 !mx-4">
        <img src={emblemat} alt="Robot Emblemat image" />
      </div>

      {/* MINIATURA Z PRZYCISKIEM */}
      <div
        className="relative w-full max-w-2xl !my-12 cursor-pointer group overflow-hidden"
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={HTP_Background}
          alt="Miniatura wideo"
          className="w-full transition-opacity duration-700 group-hover:opacity-80"
        />

        {/* Fade z góry i dołu */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1/6 bg-[linear-gradient(180deg,_rgba(0,0,0,1)_0%,_rgba(0,0,0,0)_100%)]" />
          <div className="absolute bottom-0 left-0 w-full h-1/6 bg-[linear-gradient(0deg,_rgba(0,0,0,1)_0%,_rgba(0,0,0,0)_100%)]" />
        </div>

        {/* Przycisk Play */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-opacity-50 rounded-full p-4">
            <img src={Play_button} alt="Play" className="w-8" />
          </div>
        </div>
      </div>

      {/* TYTUŁ + IKONY */}
      <div className="!my-12">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-5xl text-[#b9935b] kranky-regular">HOW TO PLAY</h1>
          <div className="flex !ml-30 !mt-4">
            {[...Array(7)].map((_, i) => (
              <img key={i} className="w-6" src={ra} alt="ra image" />
            ))}
          </div>
        </div>
      </div>

      {/* OPIS */}
      <div className="!my-12">
        <p className="text-[#b9935b] text-lg !px-12 text-center">
        This is a strategic game where players embody themselves as leaders of powerful factions. Gather resources, create new tactics, and uncover magical secrets. Fight against your enemies and free your people from tyranny.
        </p>
      </div>
    </div>
  );
};

export default How_To_Play_Section;
