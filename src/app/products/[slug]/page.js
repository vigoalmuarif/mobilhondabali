import { prisma } from "../../../lib/client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Heading } from "./show/heading";
import { Featured } from "./show/featured";
import { FeaturedProduct } from "./show/featured-product";
import { TablePrice } from "../../../components/table/price";
import { Spesifikasi } from "./show/spec";
import { Spec } from "./show/spec/spec";
import { Colors } from "./show/colors";
import {
  GalleryLightBox,
  ImageList,
} from "../../../components/lightbox/clientComponent";
import { ProductAvaible } from "./show/productAvaible";

export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const fetchCache = "force-no-store";
async function getProduct(slug) {
  const product = await prisma.type.findUnique({
    where: {
      slug: slug,
    },
    include: {
      models: {
        include:{
          specifications: true
        },
        orderBy: {
          price: "asc",
        },
      },
      featureds: {
        include: {
          lists: true,
        },
      },
      colors: true,
      images:true,
      _count: {
        select: { models: true },
      },
    },
  });

  return product;
}

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const slug = params.slug
 
  // fetch data
  const product = await prisma.meta.findUnique({
    where:{
      slug: slug
    }
  })
 
  const data = await getProduct(slug);
  return {
    title: product?.meta_title ?? data?.name,
    description: product?.meta_desc ?? data?.desc,
    keywords: product?.meta_keyword.split(',') ?? ''
  }
}
 


const Page = async ({ params: { slug }, searchParams }) => {
  const data = await getProduct(slug);
  return (
    <>
      {!data && notFound()}

      <Heading
        title={data?.name}
        desc={`Miliki Mobil Honda ${data?.name} di Honda Bintang Tabanan.`}
      />

      <ProductAvaible>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
          <div className="p-4 w-full rounded-2xl mb-5 md:mb-0">
            <Colors data={data?.colors} />
          </div>
          <TablePrice data={data?.models} count={data?._count.models}>
            <div className="mt-4 px-3 flex flex-wrap gap-5">
              <Link
                href="https://wa.me/6281236011054"
                className="btnPrimary w-full md:w-auto"
              >
                Pesan sekarang
              </Link>
              <Link
                href="https://drive.google.com/file/d/10RyuDqc4z_7d1RK5AKdBPNQWfkXSCbfs/view"
                className="btnSecondary w-full md:w-auto"
              >
                Unduh browsur
              </Link>
            </div>
          </TablePrice>
        </div>
      </ProductAvaible>

      <Featured />

      {data?.featureds && 
      
      <FeaturedProduct
        title={data?.featureds?.title}
        subTitle={data?.featureds?.desc}
      >
        {data?.featureds?.lists.map((item) => (
          <FeaturedProduct.Body
            key={item?.id}
            heading={item?.title}
            content={item?.desc}
          />
        ))}
      </FeaturedProduct>
      }

      <Spesifikasi>
        <h2 className="mb-2">Spesifikasi</h2>
        <p className="text-lg mt-3 mb-12">
          Masing-masing model mempunyai spesifikasi yang berbeda
        </p>
        <Spec data={data?.models} />
      </Spesifikasi>

      {data?.images.length > 0 && 
      
      <section className="pt-24">
        <div className="container">
          <h2 className="mb-2">Design</h2>
          <p className="text-lg mt-3 mb-8">
            Mewahnya desain interior dan exterior dari mobil honda {data?.name}
          </p>
        </div>
        <div className="container mb-8">
          <h3 className="">Interior</h3>
        </div>
        <GalleryLightBox styles="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data?.images.filter(item => item?.category === 'interior').map(item => 
          <ImageList
            key={item?.id}
            title={'Interior' + ' ' + data?.name+'_'+item?.id}
            image={item?.image}
          />
            )}
        </GalleryLightBox>
        <div className="container mb-8 mt-14">
          <h3 className="">Exterior</h3>
        </div>
        <GalleryLightBox styles="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.images.filter(item => item?.category === 'exterior').map(item => 
          <ImageList
            key={item?.id}
            title={'Exterior' + ' ' + data?.name+'_'+item?.id}
            image={item?.image}
          />
            )}
        </GalleryLightBox>
      </section>
      }

    </>
  );
};

export default Page;
