import React from 'react'
import QuickInfo from './QuickInfo'
import Board from '../assets/Game-Elements.webp'
import Blur from '../assets/Blur.webp'
const GameElements = () => {
    const glowStyle = {
        width: '100%',
        height: '100vh',
        background: 'radial-gradient(circle, rgba(0,27,95,0.8) 0%, rgba(0,0,0,1) 80%)',
      };
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <QuickInfo/>
        <div className='w-full relative'>
            <img src={Board} className='!my-32' alt='Board with all elemnts' />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10' style={glowStyle}></div>
            <img src={Blur} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 blur-xs' alt='Blured Abyss' />
        </div>
        <div className="w-full bg-[#4F81FF]/8 border-y-1 border-[#3971FF]/25 border-opacity-100 rounded-[20px] !px-6 !pb-8 text-white flex flex-col md:!my-6 md:rounded-[60px] md:!pb-12">
            <h2 className="text-center text-2xl font-serif !py-8 md:text-5xl md:!py-16">Game Elements</h2>
            <div className="flex gap-4 text-sm justify-between text-lg md:text-xl !pb-8 md:justify-center md:gap-30">
                <ul className="flex flex-col space-y-1 text-left">
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
                <ul className="flex flex-col space-y-1 text-left">
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
  )
}

export default GameElements