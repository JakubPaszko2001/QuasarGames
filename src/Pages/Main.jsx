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
      {/* Scroll to top button */}
      <a
  href="#main-page"
  className="fixed bottom-6 right-6 w-14 h-14 flex items-center justify-center rounded-full bg-black/10 backdrop-blur-md border border-gray-500 text-white hover:bg-white/10 transition-all duration-300 z-50"
  title="Back to top"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    className="w-6 h-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
</a>

    </main>
  )
}

export default Main