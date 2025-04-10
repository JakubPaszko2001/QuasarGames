import React from 'react'
import instagram from '../assets/instagram.webp'
import youtube from '../assets/youtube.webp'
import facebook from '../assets/facebook.webp'

const Footer = () => {
  return (
    <div className='w-full'>
        <p className="text-[#FFBF8D] text-lg !px-12 text-center md:text-2xl md:!px-30">
        "At the edge of the forgotten sands, the god Abyss watches in silence."
        </p>
        <div className='flex w-full justify-center items-center gap-2 !my-8'>
            <img loading='lazy' src={instagram} alt="instagram" className='h-[30px]' />
            <img loading='lazy' src={youtube} alt="youtube" className='h-[30px]' />
            <img loading='lazy' src={facebook} alt="facebook" className='h-[30px]'/>
        </div>
    </div>
  )
}

export default Footer