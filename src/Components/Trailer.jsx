import React from 'react'
import Trailer_Abyss from '../assets/Trailer-Mobile.mp4'
const Trailer = () => {
  return (
    <div>
        <video className='absolute top-0 left-0 h-screen w-screen' autoPlay muted loop playsInline>
            <source src={Trailer_Abyss} type="video/mp4" />
        </video>
    </div>
  )
}

export default Trailer