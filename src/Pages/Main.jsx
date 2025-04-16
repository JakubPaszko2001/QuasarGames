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
import Gold_Line from "../assets/Gold_Line.png"

const Main = () => {
  return (
    <main>
      <Navbar />
      <Main_Page />
      <Kick />
      <QuickInfo />
      <GameElements />
      <div className='lg:flex relative'>
      <img loading='lazy' src={Gold_Line} alt="Gold_Line" className='hidden 2xl:flex absolute w-1/2 rotate-90 top-1/2 left-1/2 -translate-x-1/2 w-[30%]' />
      <Trailer_Section />
      <How_To_Play_Section />
      </div>
      <Gallery />
      <Footer />
    </main>
  )
}

export default Main