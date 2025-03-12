import React from 'react'
import QuickInfo from './QuickInfo'
import Board from '../assets/Game-Elements.png'
const GameElements = () => {
    const glowStyle = {
        width: '100%',
        height: '100vh',
        background: 'radial-gradient(circle, rgba(34,0,102,0.8) 0%, rgba(0,0,0,1) 80%)',
      };
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <QuickInfo/>
        <div className='w-full relative'>
            <img src={Board} className='!my-32' alt='Board with all elemnts' />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10' style={glowStyle}></div>
        </div>
    </div>
  )
}

export default GameElements