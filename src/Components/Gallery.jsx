import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const images = [
  "https://scontent-waw2-2.xx.fbcdn.net/v/t1.15752-9/484433045_1383213463009991_8171885387272722301_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_ohc=tBE0XOeXGaEQ7kNvgG9vYvW&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&oh=03_Q7cD1wEgomG0qoE5iSn_GbuC_hGVJKpZnNImDQKEkuXM3hxaFg&oe=68029065",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t1.15752-9/484433045_1383213463009991_8171885387272722301_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_ohc=tBE0XOeXGaEQ7kNvgG9vYvW&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&oh=03_Q7cD1wEgomG0qoE5iSn_GbuC_hGVJKpZnNImDQKEkuXM3hxaFg&oe=68029065",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t1.15752-9/484433045_1383213463009991_8171885387272722301_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_ohc=tBE0XOeXGaEQ7kNvgG9vYvW&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&oh=03_Q7cD1wEgomG0qoE5iSn_GbuC_hGVJKpZnNImDQKEkuXM3hxaFg&oe=68029065",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t1.15752-9/484433045_1383213463009991_8171885387272722301_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_ohc=tBE0XOeXGaEQ7kNvgG9vYvW&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&oh=03_Q7cD1wEgomG0qoE5iSn_GbuC_hGVJKpZnNImDQKEkuXM3hxaFg&oe=68029065",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t1.15752-9/484433045_1383213463009991_8171885387272722301_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_ohc=tBE0XOeXGaEQ7kNvgG9vYvW&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&oh=03_Q7cD1wEgomG0qoE5iSn_GbuC_hGVJKpZnNImDQKEkuXM3hxaFg&oe=68029065",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="flex flex-col w-full items-center bg-[#181639]/50 border-y-1 border-[#27204E] border-opacity-100 rounded-[20px] !py-4 !mt-14">
      <h1 className="text-3xl font-bold mb-6 text-white">Gallery</h1>

      <div className="w-full max-w-6xl !my-10">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.5} // Pokazuje 1.5 zdjęcia (większe)
          spaceBetween={60} // Większy odstęp między slajdami
          loop={true} // Karuzela nieskończona
          initialSlide={Math.floor(images.length / 2)} // Startuje od środkowego zdjęcia
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 300,
            modifier: 3,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="w-[640px] h-[480px]">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-xl shadow-2xl cursor-pointer"
                onClick={() => setSelectedImage(src)} // Po kliknięciu otwórz pełny ekran
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* MODAL Z PEŁNYM ZDJĘCIEM */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)} // Zamknij modal po kliknięciu
        >
          <img
            src={selectedImage}
            alt="Fullscreen"
            className="max-w-[90vw] max-h-[90vh] rounded-lg"
          />
          <button
            className="absolute top-5 right-5 text-white text-4xl font-bold"
            onClick={() => setSelectedImage(null)}
          >
            ✖
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
