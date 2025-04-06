import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/mousewheel'

const images = [
  'https://scontent-waw2-2.xx.fbcdn.net/v/t1.15752-9/480942826_528294930307004_8430743161985563023_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=lVxEahmvK2wQ7kNvwF7cESQ&_nc_oc=Adm00mI8wF7wC7DWKAA8YkFsdqx1fWdokWqoeop2YwK7ETNCuyWN1moyaE8xXAgww4o&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&oh=03_Q7cD2AHrFZOSUTLVxLc41EQ565QRNOhb7r2etHh8dFmk2EoF3Q&oe=681A1BE8',
  'https://scontent-waw2-2.xx.fbcdn.net/v/t1.15752-9/480942826_528294930307004_8430743161985563023_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=lVxEahmvK2wQ7kNvwF7cESQ&_nc_oc=Adm00mI8wF7wC7DWKAA8YkFsdqx1fWdokWqoeop2YwK7ETNCuyWN1moyaE8xXAgww4o&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&oh=03_Q7cD2AHrFZOSUTLVxLc41EQ565QRNOhb7r2etHh8dFmk2EoF3Q&oe=681A1BE8',
  'https://scontent-waw2-2.xx.fbcdn.net/v/t1.15752-9/480942826_528294930307004_8430743161985563023_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=lVxEahmvK2wQ7kNvwF7cESQ&_nc_oc=Adm00mI8wF7wC7DWKAA8YkFsdqx1fWdokWqoeop2YwK7ETNCuyWN1moyaE8xXAgww4o&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&oh=03_Q7cD2AHrFZOSUTLVxLc41EQ565QRNOhb7r2etHh8dFmk2EoF3Q&oe=681A1BE8',
  'https://scontent-waw2-2.xx.fbcdn.net/v/t1.15752-9/480942826_528294930307004_8430743161985563023_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=lVxEahmvK2wQ7kNvwF7cESQ&_nc_oc=Adm00mI8wF7wC7DWKAA8YkFsdqx1fWdokWqoeop2YwK7ETNCuyWN1moyaE8xXAgww4o&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&oh=03_Q7cD2AHrFZOSUTLVxLc41EQ565QRNOhb7r2etHh8dFmk2EoF3Q&oe=681A1BE8',
  'https://scontent-waw2-2.xx.fbcdn.net/v/t1.15752-9/480942826_528294930307004_8430743161985563023_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=lVxEahmvK2wQ7kNvwF7cESQ&_nc_oc=Adm00mI8wF7wC7DWKAA8YkFsdqx1fWdokWqoeop2YwK7ETNCuyWN1moyaE8xXAgww4o&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&oh=03_Q7cD2AHrFZOSUTLVxLc41EQ565QRNOhb7r2etHh8dFmk2EoF3Q&oe=681A1BE8',
  'https://scontent-waw2-2.xx.fbcdn.net/v/t1.15752-9/480942826_528294930307004_8430743161985563023_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=lVxEahmvK2wQ7kNvwF7cESQ&_nc_oc=Adm00mI8wF7wC7DWKAA8YkFsdqx1fWdokWqoeop2YwK7ETNCuyWN1moyaE8xXAgww4o&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&oh=03_Q7cD2AHrFZOSUTLVxLc41EQ565QRNOhb7r2etHh8dFmk2EoF3Q&oe=681A1BE8',
  'https://scontent-waw2-2.xx.fbcdn.net/v/t1.15752-9/480942826_528294930307004_8430743161985563023_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=lVxEahmvK2wQ7kNvwF7cESQ&_nc_oc=Adm00mI8wF7wC7DWKAA8YkFsdqx1fWdokWqoeop2YwK7ETNCuyWN1moyaE8xXAgww4o&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&oh=03_Q7cD2AHrFZOSUTLVxLc41EQ565QRNOhb7r2etHh8dFmk2EoF3Q&oe=681A1BE8',
]

const Gallery = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col">
      {/* Tytuł */}
      <div className="w-full h-1/5 flex justify-center items-center">
        <h1 className="text-5xl text-[#b9935b] kranky-regular">Gallery</h1>
      </div>

      {/* Swiper z 3 widocznymi zdjęciami */}
      <div className="h-4/5 px-10">
        <Swiper
          direction="vertical"
          loop={true}
          mousewheel={true}
          centeredSlides={true}
          slidesPerView={3}
          speed={700}
          modules={[Mousewheel]}
          className="w-full h-full rounded-3xl overflow-hidden"
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center transition-all duration-700 ease-in-out"
            >
              <img
                src={src}
                alt={`slide-${index}`}
                className="w-full h-full object-cover rounded-3xl swiper-slide-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Style efektów aktywnego slajdu */}
<style jsx="true">{`
  .swiper-slide {
    filter: blur(2px);
    opacity: 0.6;
    scale: 0.85;
    transition: all 0.5s ease;
  }

  .swiper-slide-prev {
    margin-bottom: -50px;
  }

  .swiper-slide-next {
    margin-top: -50px;
  }

  .swiper-slide-active {
    filter: blur(0px);
    opacity: 1;
    scale: 1;
    margin: 0;
    z-index: 10;
  }
`}</style>

    </div>
  )
}

export default Gallery
