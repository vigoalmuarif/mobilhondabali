"use client";
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

export const Colors = ({ data }) => {
  console.log(data)
  return (
    <>
      <h6 className="text-center mb-8">Pilihan warna</h6>
      {data?.length === 0 && <p className="text-center">Belum ada daftar warna</p>}
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="colorCar"
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <Image
              src={item.image}
              width={800}
              height={800}
              alt={item.name}
              className="w-full max-h-60 min-h-40 object-contain rounded-2xl"
            />
            <div className="text-center mt-5 mb-7">
              <p className="">{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

