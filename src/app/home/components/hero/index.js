import Image from "next/image"
import Link from "next/link";


export const Hero = ({image,title,subtitle,PrimaryLink, SecondaryLink,PrimaryLinkTitle, SecondaryLinkTitle}) => {
    return (
        <section className="container flex flex-wrap min-h-screen pt-28 space-y-10">
        <div className="w-full self-center lg:w-1/2">
          <h1 className="text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="text-lg text-slate-700 pt-4">
            {subtitle} Hai, saya <span className='font-bold text-primary-500'>Budi</span> Telemarketing Honda !
        Saya siap membantu Anda melakukan pembelian Mobil Impian Anda.
          </p>
          <div className="flex flex-wrap mt-5 gap-4">
            <Link href={SecondaryLink} target="_blank" className="btnSecondary w-full lg:w-fit">
              {SecondaryLinkTitle}
            </Link>
            <Link href={PrimaryLink} className="btnPrimary w-full lg:w-fit">
              {PrimaryLinkTitle}
            </Link>
          </div>
        </div>
        <div className="w-full self-center lg:w-1/2 px-4">
          <Image
            src={image}
            width={1000}
            height={1000}
            alt="heroes"
            className="mx-auto w-auto max-h-96 object-contain"
          />
        </div>
      </section>
    )
}
