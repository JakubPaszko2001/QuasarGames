import React from 'react'
import Trailer_Abyss from '../assets/Abyss-Trailer.mp4'
const Trailer = () => {
  return (
    <div>
        <video className='w-screen' autoPlay muted loop playsInline>
            <source src={Trailer_Abyss} type="video/webm" />
        </video>
    </div>
  )
}

export default Trailer