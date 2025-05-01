import React from 'react';
import instagram from '../assets/instagram.webp';
import youtube from '../assets/youtube.webp';
import facebook from '../assets/facebook.webp';

const Footer = () => {
  return (
    <div className='w-full'>
      <p className="text-[#FFBF8D] text-lg !px-12 text-center md:text-2xl md:!px-30">
        "At the edge of the forgotten sands, the god Abyss watches in silence."
      </p>
      <div className='flex w-full justify-center items-center gap-2 !my-8'>
        <a href="https://www.instagram.com/quasargamesofficial/" target="_blank" rel="noopener noreferrer">
          <img loading='lazy' src={instagram} alt="instagram" className='h-[30px]' />
        </a>
        <a href="https://www.youtube.com/@QuasarGames_Official" target="_blank" rel="noopener noreferrer">
          <img loading='lazy' src={youtube} alt="youtube" className='h-[30px]' />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61567433799695" target="_blank" rel="noopener noreferrer">
          <img loading='lazy' src={facebook} alt="facebook" className='h-[30px]' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
