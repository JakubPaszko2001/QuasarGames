import React from 'react'
import Navbar from '../Components/Navbar'
import MainPage from '../Components/Main'
// import Trailer from '../Components/Trailer'
const Main = () => {
  return (
    <main className='h-screen'>
      <Navbar />
      <MainPage />
      {/* <Trailer /> */}
    </main>
  )
}

export default Main