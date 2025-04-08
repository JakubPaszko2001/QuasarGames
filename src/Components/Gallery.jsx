import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from 'swiper/modules'
import Gold_Line from "../assets/Gold_Line.png"
import 'swiper/css'
import 'swiper/css/mousewheel'

const images = [
  'https://scontent-waw2-2.xx.fbcdn.net/v/t1.15752-9/480942826_528294930307004_8430743161985563023_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=lVxEahmvK2wQ7kNvwF7cESQ&_nc_oc=Adm00mI8wF7wC7DWKAA8YkFsdqx1fWdokWqoeop2YwK7ETNCuyWN1moyaE8xXAgww4o&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&oh=03_Q7cD2AHrFZOSUTLVxLc41EQ565QRNOhb7r2etHh8dFmk2EoF3Q&oe=681A1BE8',
  'https://scontent-waw2-2.xx.fbcdn.net/v/t1.15752-9/484433045_1383213463009991_8171885387272722301_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=0zBUrh57yP4Q7kNvwG1DSVf&_nc_oc=AdklfYHnK988SvktmW8OuxTOUS3w1y86o7tw_XNjJKsrvG2XdmRA2Mr0g_mmkYpSmPA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&oh=03_Q7cD2AEYBUjuw6xjWuqkbRtTHrKviQVcJijMRxzsk7KMvjjwPA&oe=681A4B65',
  'https://scontent-waw2-2.xx.fbcdn.net/v/t1.15752-9/480942826_528294930307004_8430743161985563023_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=lVxEahmvK2wQ7kNvwF7cESQ&_nc_oc=Adm00mI8wF7wC7DWKAA8YkFsdqx1fWdokWqoeop2YwK7ETNCuyWN1moyaE8xXAgww4o&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&oh=03_Q7cD2AHrFZOSUTLVxLc41EQ565QRNOhb7r2etHh8dFmk2EoF3Q&oe=681A1BE8',
  'https://scontent-waw2-2.xx.fbcdn.net/v/t1.15752-9/484433045_1383213463009991_8171885387272722301_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=0zBUrh57yP4Q7kNvwG1DSVf&_nc_oc=AdklfYHnK988SvktmW8OuxTOUS3w1y86o7tw_XNjJKsrvG2XdmRA2Mr0g_mmkYpSmPA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&oh=03_Q7cD2AEYBUjuw6xjWuqkbRtTHrKviQVcJijMRxzsk7KMvjjwPA&oe=681A4B65',
  'https://scontent-waw2-2.xx.fbcdn.net/v/t1.15752-9/480942826_528294930307004_8430743161985563023_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=lVxEahmvK2wQ7kNvwF7cESQ&_nc_oc=Adm00mI8wF7wC7DWKAA8YkFsdqx1fWdokWqoeop2YwK7ETNCuyWN1moyaE8xXAgww4o&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&oh=03_Q7cD2AHrFZOSUTLVxLc41EQ565QRNOhb7r2etHh8dFmk2EoF3Q&oe=681A1BE8',
  'https://scontent-waw2-2.xx.fbcdn.net/v/t1.15752-9/484433045_1383213463009991_8171885387272722301_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=0zBUrh57yP4Q7kNvwG1DSVf&_nc_oc=AdklfYHnK988SvktmW8OuxTOUS3w1y86o7tw_XNjJKsrvG2XdmRA2Mr0g_mmkYpSmPA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&oh=03_Q7cD2AEYBUjuw6xjWuqkbRtTHrKviQVcJijMRxzsk7KMvjjwPA&oe=681A4B65',

]

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="w-full h-screen bg-black flex flex-col">
      {/* Header */}
      <div className="w-full h-1/5 flex flex-col justify-center items-center">
      <img src={Gold_Line} alt="Gold_Line" className='w-[87%] !mb-6' />
      <h1 className="text-5xl font-bold kranky-regular text-[#FFBF8D]">GALLERY</h1>
      <img src={Gold_Line} alt="Gold_Line" className='w-[87%] !mt-6' />
      </div>
      {/* Swiper */}
      <div className="h-4/5 px-10 flex">
        <Swiper
          direction="vertical"
          loop={true}
          mousewheel={true}
          centeredSlides={true}
          slidesPerView={3}
          speed={700}
          modules={[Mousewheel]}
          className="rounded-3xl overflow-hidden"
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              className="transition-all duration-700 ease-in-out"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`slide-${index}`}
                className="object-cover rounded-2xl cursor-pointer translate-y-[40px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
  <div
    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 px-4"
    onClick={() => setSelectedImage(null)}
  >
    {/* Zamknij */}
    <button
      onClick={() => setSelectedImage(null)}
      className="absolute top-4 right-4 text-white text-3xl bg-black/60 rounded-full p-2 hover:bg-black/80 z-50"
    >
      ✕
    </button>

    {/* Poprzednie zdjęcie */}
    <button
      onClick={(e) => {
        e.stopPropagation()
        const currentIndex = images.indexOf(selectedImage)
        const prevIndex = (currentIndex - 1 + images.length) % images.length
        setSelectedImage(images[prevIndex])
      }}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl z-50"
    >
      ←
    </button>

    {/* Następne zdjęcie */}
    <button
      onClick={(e) => {
        e.stopPropagation()
        const currentIndex = images.indexOf(selectedImage)
        const nextIndex = (currentIndex + 1) % images.length
        setSelectedImage(images[nextIndex])
      }}
      className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl z-50"
    >
      →
    </button>

    {/* Obraz */}
    <div
      className="relative w-full h-full flex justify-center items-center"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={selectedImage}
        alt="modal"
        className="max-h-[90vh] max-w-full object-contain rounded-xl shadow-xl"
      />
    </div>
  </div>
)}
      {/* Styl efektów slajdów */}
      <style jsx="true">{`
        .swiper-slide {
          filter: blur(2px);
          opacity: 0;
          scale: 0.85;
          transition: all 0.5s ease;
          z-index: 10;
        }

        .swiper-slide-prev {
          margin-bottom: -50px;
          z-index: 20;
          opacity: 1;
        }

        .swiper-slide-next {
          margin-top: -50px;
          z-index: 20;
          opacity: 1;
        }

        .swiper-slide-active {
          filter: blur(0px);
          opacity: 1;
          scale: 1;
          margin: 0;
          z-index: 30;
        }
      `}</style>
    </div>
  )
}

export default Gallery
