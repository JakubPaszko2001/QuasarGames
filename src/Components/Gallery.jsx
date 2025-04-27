import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from 'swiper/modules'
import Gold_Line from "../assets/Gold_Line.png"
import 'swiper/css'
import 'swiper/css/mousewheel'

const imageModules = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,svg,webp}', { eager: true })
const images = Object.values(imageModules).map((mod) => mod.default)

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const swiperRef = useRef(null)

  const closeModal = () => {
    if (selectedImage) {
      const currentIndex = images.indexOf(selectedImage)
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideToLoop(currentIndex, 0) // zmiana slajdu bez animacji
      }
    }
    setSelectedImage(null)
  }

  return (
    <div className="w-full h-screen bg-black flex flex-col">
      {/* Header */}
      <div className="w-full h-1/5 flex flex-col justify-center items-center">
        <img loading='lazy' src={Gold_Line} alt="Gold_Line" className='w-[87%] !mb-6 lg:hidden' />
        <h1 className="text-5xl font-bold kranky-regular text-[#FFBF8D] md:text-7xl">GALLERY</h1>
        <img loading='lazy' src={Gold_Line} alt="Gold_Line" className='w-[87%] !mt-6 lg:hidden' />
      </div>

      {/* Swiper */}
      <div className="h-4/5 px-10 flex">
        <Swiper
          ref={swiperRef}
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
              className="transition-all duration-700 ease-in-out translate-y-[8%] lg:-translate-y-[13%]"
              onClick={() => setSelectedImage(src)}
            >
              <div className="w-full h-[300px] lg:h-[400px] flex items-center justify-center overflow-hidden">
                <img
                  loading="lazy"
                  src={src}
                  alt={`slide-${index}`}
                  className="max-h-full max-w-full object-contain rounded-2xl cursor-pointer"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 px-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-3xl bg-black/60 rounded-full p-2 hover:bg-black/80 z-50"
          >
            ✕
          </button>

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
