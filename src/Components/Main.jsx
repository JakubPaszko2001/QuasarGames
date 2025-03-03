import React from 'react'
import BackgroundImage from '../assets/Main_background.png'
const Main = () => {
  return (
        <div className="h-2/3 w-screen flex justify-center items-center overflow-hidden">
          <img className="w-[110%] h-[110%] object-cover" src={BackgroundImage} alt="Abyss Logo" />
        </div>

  )
}

export default Main