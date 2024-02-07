// 'use client'

import Image from "next/image";



export default function ImageList({title="honda bali", image, styles}) {
  return (
    <>
      <a
        data-lg-size="1406-1390"
        className="gallery-item rounded-2xl"
        data-src={image} 
        data-sub-html={title}
      >
        <Image width={900} height={900} alt={title} className={`object-cover object-center w-full max-h-28 md:max-h-60 transition duration-150 ease-out hover:ease-in hover:contrast-50 ${styles}`} src={image} />
      </a>
    </>
  );
}
