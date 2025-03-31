import React from 'react'
import Navbar from '../Components/Navbar'
import Trailer from '../Components/Trailer'
import Kick from '../Components/Kick'
import QuickInfo from '../Components/QuickInfo'
import GameElements from '../Components/GameElements'
import HTP from '../Components/HTP'
import TrailerAbyss from '../Components/TrailerAbyss'
import Gallery from '../Components/Gallery'
const Main = () => {
  return (
    <main>
      <Navbar />
      <Trailer />
      <Kick />
      <GameElements />
      <HTP />
      {/* <TrailerAbyss /> */}
      {/* <Gallery /> */}
    </main>
  )
}

export default Main