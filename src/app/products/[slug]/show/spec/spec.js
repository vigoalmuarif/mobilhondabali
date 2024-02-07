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

export const Spec = () => {
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
        <SwiperSlide>
         <div className="p-4 bg-slate-100/70 border border-slate-100 shadow-sm rounded-2xl max-w-lg">
            <h6>test</h6>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="p-4 bg-slate-100 rounded-2xl max-w-lg">
            <h6>test</h6>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="p-4 bg-slate-100 rounded-2xl max-w-lg">
            <h6>test</h6>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
         </div>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/#">
            <Image
              src="/promo/honda2.webp"
              width={700}
              height={700}
              alt="promo"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/#">
            <Image
              src="/promo/honda.webp"
              width={700}
              height={700}
              alt="promo"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    )
}

