import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';

const imageURL =
  'https://scontent-waw2-2.xx.fbcdn.net/v/t1.15752-9/484433045_1383213463009991_8171885387272722301_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_ohc=tBE0XOeXGaEQ7kNvgG9vYvW&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&oh=03_Q7cD1wEgomG0qoE5iSn_GbuC_hGVJKpZnNImDQKEkuXM3hxaFg&oe=68029065';

export default function VerticalGallery() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-black">
      <Swiper
        direction="vertical"
        slidesPerView={3}
        spaceBetween={20}
        mousewheel
        loop={true}
        modules={[Mousewheel]}
        className="w-[300px] h-[600px]"
      >
        {[...Array(6)].map((_, index) => (
          <SwiperSlide key={index} className="rounded-xl overflow-hidden">
            <img
              src={imageURL}
              alt={`slide-${index}`}
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
