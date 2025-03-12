import React from 'react'
import Navbar from '../Components/Navbar'
import Trailer from '../Components/Trailer'
import Kick from '../Components/Kick'
import QuickInfo from '../Components/QuickInfo'
import GameElements from '../Components/GameElements'
const Main = () => {
  return (
    <main>
      <Navbar />
      <Trailer />
      <Kick />
      <GameElements />
    </main>
  )
}

export default Main