import React from 'react'
import Navbar from '../Components/Navbar'
import Main_Page from '../Components/Main_Page'
import Kick from '../Components/Kick'
import GameElements from '../Components/GameElements'
import Trailer_Section from '../Components/Trailer_Section'
import How_To_Play_Section from '../Components/How_To_Play_Section'
import Gallery from '../Components/Gallery'
import QuickInfo from '../Components/QuickInfo'
import Footer from '../Components/Footer'

const Main = () => {
  return (
    <main>
      <Navbar />
      <Main_Page />
      <Kick />
      <QuickInfo />
      <GameElements />
      <Trailer_Section />
      <How_To_Play_Section />
      <Gallery />
      <Footer />
    </main>
  )
}

export default Main