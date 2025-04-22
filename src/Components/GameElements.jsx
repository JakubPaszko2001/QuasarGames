import React from 'react'
import Board from '../assets/Game-Elements.webp'
import Blur from '../assets/Blur.webp'
import bg from '../assets/rewers_pudełko.png'

const GameElements = () => {
  const glowStyle = {
    width: '100%',
    height: '120vh',
    background: 'radial-gradient(circle, rgba(0,27,95,0.8) 0%, rgba(0,0,0,1) 50%)',
  }

  return (
    <div className='w-full flex flex-col justify-start items-center relative'>
      {/* <div className='absolute top-0 w-full h-[10vh] bg-gradient-to-t from-transparent to-black '></div> */}
      <div className='hidden xl:flex absolute bottom-1/2 w-full h-[30vh] bg-gradient-to-t from-black to-transparent '></div>
      {/* Plansza */}
      <div className='w-full min-h-[50vh] relative flex justify-center items-center lg:min-h-[70vh] xl:min-h-[100vh]'>
        <img
          loading="lazy"
          src={Board}
          className='h-full max-h-screen object-contain z-10 lg:w-[60%]'
          alt='Game Elements Board'
        />
        <div
          className='absolute top-[-72%] left-0 -z-10 lg:top-[-36%] xl:top-[-7%]'
          style={glowStyle}
        ></div>
        <img
          loading="lazy"
          src={Blur}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 blur-xs xl:w-[60vw] xl:blur-[1px]'
          alt='Blured Abyss'
        />
      </div>

      {/* Sekcja elementów gry */}
      <div className='relative w-full xl:h-screen flex justify-center items-center'>
        <div className='hidden lg:flex absolute z-20 bottom-0 w-full h-[20vh] bg-gradient-to-t from-black to-transparent '></div>
        <div className='hidden lg:flex absolute z-20 top-0 w-full h-[20vh] bg-gradient-to-t from-transparent to-black '></div>
        {/* <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_10%,_rgba(0,0,0,0.85)_200%)]"></div> */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle,_transparent_0%,_#000000_400%)]"></div>
        <img src={bg} className='lg:flex absolute z-10 top-0 left-0 -z-10 w-full h-full object-cover rounded-[60px]' alt='Background' />
        <div className="relative z-30 w-full min-h-[30vh] bg-[#4F81FF]/10 bg-black/40 border-y-[1px] lg:border-x-[1px] border-white/20 border-[#3971FF]/25 border-gray-500 rounded-[20px] md:rounded-[60px] lg:rounded-[10px] !px-6 !pb-12 md:pb-12 text-white flex flex-col md:my-6 xl:w-2/3 lg:min-h-[60vh] xl:min-h-[70vh] backdrop-blur-md shadow-[0_0_23px_9px_rgba(255,255,255,0.1)]">
        <h2 className="text-center text-2xl font-serif md:text-5xl lg:text-5xl xl:text-6xl h-[10vh] lg:h-[20vh] flex items-center justify-center">Game Elements</h2>
          <div className="flex gap-4 text-xs text-lg md:text-xl pb-8 justify-around md:justify-center md:gap-[120px]">
            <ul className="flex flex-col space-y-1 text-left text-white lg:text-xl xl:text-2xl ">
              <li>• 4 Pieces of Main Board</li>
              <li>• 4 Lord Standees</li>
              <li>• 4 Citadel Standees</li>
              <li>• 8 Barracks Standees</li>
              <li>• 12 Wood Machine Standees</li>
              <li>• 8 Stone Machine Standees</li>
              <li>• 12 Gold Machine Standees</li>
              <li>• 8 Diamond Machine Standees</li>
              <li>• 8 Obsidian Machine Standees</li>
            </ul>
            <ul className="flex flex-col space-y-1 text-left text-white lg:text-xl xl:text-2xl">
              <li>• 1 Combat Board</li>
              <li>• 4 Cubes (d6)</li>
              <li>• 20 Mana Tokens</li>
              <li>• 100 Attack Tokens</li>
              <li>• 100 Health Tokens</li>
              <li>• 208 Combat Cards</li>
              <li>• 28 Monster Cards</li>
              <li>• 134 Materials Cards</li>
              <li>• 100 Random Cards</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameElements
