'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

export const Spec = ({data}) => {
  console.log(data)
    return(
        <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data?.map(item => 
        <SwiperSlide key={item.id}>
         <div className="p-4 bg-slate-100/70 border border-slate-100 shadow-sm rounded-2xl max-w-lg">
            <h6>{item.name}</h6>
            <ul className="list-disc pt-2 ms-5 text-sm lg:text-base mb-2">
            {item?.specifications.map(spec => 
              <li key={spec.id}>{spec.name}</li>
              )}
            </ul>
         </div>
        </SwiperSlide>
          
          )}
      </Swiper>
    )
}

