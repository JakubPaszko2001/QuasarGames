import React from 'react'
import QuickInfo from './QuickInfo'
import Board from '../assets/Game-Elements.png'
const GameElements = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <QuickInfo/>
        <img src={Board} className='!my-32' alt='Board with all elemnts' />
    </div>
  )
}

export default GameElements