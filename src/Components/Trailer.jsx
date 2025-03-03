import React from 'react'
import Trailer_Abyss from '../assets/Trailer-Mobile.mp4'
const Trailer = () => {
  return (
    <div className='w-screen h-screen' >
        <video className='w-screen h-screen object-cover' autoPlay muted loop playsInline>
            <source src={Trailer_Abyss} type="video/mp4" />
        </video>
    </div>
  )
}

export default Trailer