'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.css";

// import required modules
import { Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

export const Promo = () => {
    return(
        <Swiper
        slidesPerView={2}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            // 640: {
            //   slidesPerView: 2,
            //   spaceBetween: 20,
            // },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            // 1024: {
            //   slidesPerView: 5,
            //   spaceBetween: 50,
            // },
          }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>

            <Image
              src="https://hondabintangtabanan.co.id/wp-content/uploads/2023/07/PROMO-BRIO-RS-2.jpg"
              width={800}
              height={800}
              alt="promo"
              className="w-auto max-h-96 object-contain bg-tranparent rounded-2xl"
            />
        </SwiperSlide>
        <SwiperSlide>
            <Image
              src="https://hondabintangtabanan.co.id/wp-content/uploads/2023/07/BRV.jpg"
              width={800}
              height={800}
              alt="promo"
              className="w-auto max-h-96 object-contain bg-tranparent rounded-2xl mx-auto"
            />
        </SwiperSlide>
      </Swiper>
    )
}

