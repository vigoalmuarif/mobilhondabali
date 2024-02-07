import CardProduct from "@/components/card/product";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Promo } from "./components/promo";
import { Konsultasi } from "./components/konsultasi";
import { Featured } from "./components/featured";
import { TestDrive } from "./components/test-drive";
import { prisma } from "@/lib/client";
import { Reward } from "./components/reward";
import { Testimonial } from "./components/testimoni";
import { Gallery } from "./components/gallery";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Blogs } from "./components/blog";
import Link from "next/link";

async function getProducts() {
  const product = await prisma.type.findMany({
    include: {
      _count: {
        select: { models: true },
      },
      models: {
        select: { price: true, id: true },
        orderBy: {
          price: "asc",
        },
        take: 1,
      },
    },
  });

  return product;
}

export default async function Page() {
  const data = await getProducts();
  return (
    <>
      {/* Hero */}
      <Hero
        image="/profile.png"
        title="Miliki Mobil Impian Anda Di Honda Bintang Tabanan"
        subtitle=""
        PrimaryLink="https://wa.me/6281236011054"
        SecondaryLink="https://drive.google.com/file/d/10RyuDqc4z_7d1RK5AKdBPNQWfkXSCbfs/view"
        PrimaryLinkTitle="Dapatkan Promo"
        SecondaryLinkTitle="Download Browsur"
      />

      {/* Tentang Kami */}
      <section className="flex flex-wrap flex-row-reverse pt-24 lg:pt-5 space-y-20 lg:space-y-0 w-full">
        <div className="w-full lg:w-1/2 md:pl-8 px-4">
          <h2>Tentang Kami</h2>
          <About />
        </div>
        <div className="w-full px-0 lg:w-1/2">
          <div className="container md:px-16 mx-auto">
            <h2>Promo</h2>
            <p className="text-lg mb-8">Promo bulan ini</p>
          </div>
          <Promo />
        </div>
      </section>

      {/* products */}
      <section className="pt-28">
        <div className="container">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Type Mobil New Honda 2024</h2>
          <p className="text-lg">
            Daftar Type Mobil New Honda yang anda impikan ada disni
          </p>
          <div className="grid grid-cols-2 gap-2 md:gap-4 mt-8 md:grid-cols-3 lg:grid-cols-4">
            {data.map((item) => (
              <CardProduct key={item.id}>
                <CardProduct.ImageProduct
                  title={item.title}
                  image={item.image}
                />
                <CardProduct.Body
                  image={item.image}
                  title={item.name}
                  variant={item._count.models}
                  price={item.models}
                  slug={item.slug}
                />
              </CardProduct>
            ))}
          </div>
        </div>
      </section>

      {/* Konsultasi */}
      <section>
        <Konsultasi />
      </section>

      {/* feature */}
      <section className="pt-24">
        <Featured />
      </section>

      {/* test drive */}
      <TestDrive />

      {/* testimoni */}
      <section className="pt-24">
        <div className="container flex flex-wrap gap-y-28">
          <div className="w-full lg:w-1/2 self-center">
            <Reward />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="px-16">
              <div className="title text-center">
                <h2>Testimonial</h2>
                <p>Apa kata mereka setelah pembelian mobil di <span className="font-semibold">Honda Bintang Tabanan bersama saya</span></p>
              </div>
            </div>
            <Testimonial />
          </div>
        </div>
      </section>

      {/* // gallery */}
      <section className="pt-24">
        <div className="container">
          <h2 className="mb-8">Gallery</h2>
          <Gallery />
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/gallery" className="btnSecondary items-center">
            Lihat lebih banyak
            <HiOutlineArrowRight className="ms-1.5" />
          </Link>
        </div>
      </section>

      {/* blogs */}
      <article className="container pt-24">
        <h2 className="mb-3">Blogs</h2>
        <p className="text-lg">
          Berita seputar Mobil Honda.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 mt-8">
          <Blogs />
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/blogs" className="btnSecondary items-center">
            Lebih banyak
            <HiOutlineArrowRight className="ms-1.5" />
          </Link>
        </div>
      </article>
    </>
  );
}
