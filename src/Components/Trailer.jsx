import React from 'react'
import Trailer_Abyss from '../assets/Trailer-Mobile.mp4'
const Trailer = () => {
  return (
    <div className='resposive top-0 left-0 w-screen h-screen' >
        <video className='w-screen h-screen object-cover' autoPlay muted loop playsInline>
            <source src={Trailer_Abyss} type="video/mp4" />
        </video>
        <div className='absolute bottom-0 h-24 w-full bg-linear-to-t from-black from-10% to-transparent'></div>
    </div>
  )
}

export default Trailer