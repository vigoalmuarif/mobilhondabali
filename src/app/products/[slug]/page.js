import {prisma} from "../../../lib/client"
import Link from "next/link";
import { notFound } from "next/navigation";
import {Heading} from "./show/heading";
import { Featured } from "./show/featured"; 
import { FeaturedProduct } from "./show/featured-product";
import { TablePrice } from "../../../components/table/price";
import { Spesifikasi } from "./show/spec";
import { Spec } from "./show/spec/spec";
import { Colors } from "./show/colors";
import { GalleryLightBox, ImageList } from "../../../components/lightbox/clientComponent";
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
        orderBy: {
          price: "asc",
        },
      },
      colors: true,
      _count:{
        select:{models:true}
      }
    },
  });

  return product;
}

const Page = async ({ params : {slug}}) => {
  const data = await getProduct(slug);
  return (
    <>
      {!data && notFound()}

      <Heading
        title={data?.name}
        desc={
          `Miliki Mobil Honda ${data?.name} di Honda Bintang Tabanan.`
        }
      />

      <ProductAvaible>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
          <div className="p-4 w-full rounded-2xl mb-5 md:mb-0">
            <Colors data={data?.colors} />
          </div>
          <TablePrice data={data?.models} count={data?._count.models} >
            <div className="mt-4 px-3 flex flex-wrap gap-5">
              <Link href="https://wa.me/6281236011054" className="btnPrimary w-full md:w-auto">
                Pesan sekarang
              </Link>
              <Link href="https://drive.google.com/file/d/10RyuDqc4z_7d1RK5AKdBPNQWfkXSCbfs/view" className="btnSecondary w-full md:w-auto">
                Unduh browsur
              </Link>
            </div>
          </TablePrice>
        </div>
      </ProductAvaible>

      <Featured />

      <FeaturedProduct
        title={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        subTitle={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, laboriosam quis possimus mollitia doloribus iste."
        }
      >
        <FeaturedProduct.Body
          heading={"consectetur dolor"}
          content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi"
          }
        />
        <FeaturedProduct.Body
          heading={"consectetur dolor"}
          content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi"
          }
        />
        <FeaturedProduct.Body
          heading={"Lorem ipsum elit"}
          content={"Lorem doloribus dolor sit amet  adipisicing elit. Commodi"}
        />
        <FeaturedProduct.Body
          heading={"elit ipsum dolor"}
          content={
            "adipisicing ipsum dolor sit amet consectetur adipisicing elit. Commodi"
          }
        />
      </FeaturedProduct>

      <Spesifikasi>
        <h2 className="mb-2">Spesifikasi</h2>
        <p className="text-lg mt-3 mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias
          vitae voluptate tempore illo laudantium, dolorum excepturi quis et
          sequi.
        </p>
        <Spec />
      </Spesifikasi>

      <section className="pt-24">
        <div className="container">
          <h2 className="mb-2">Design</h2>
          <p className="text-lg mt-3 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            molestias vitae voluptate tempore illo laudantium, dolorum excepturi
            quis et sequi.
          </p>
        </div>
        <div className="container mb-8">
          <h3 className="">Interior</h3>
        </div>
        <GalleryLightBox styles="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <ImageList
              title={data?.name}
              image="https://www.honda-indonesia.com/glide/local/uploads/images/sections_items/red_stitches__1702043300899.jpg?w=1200&s=9d433c8036ff00518db4fcc34d59a206"
            />
            <ImageList
              title={data?.name}
              image="https://www.honda-indonesia.com/glide/local/uploads/images/sections_items/tilt&telescopic__1702043342735.jpg?w=1200&s=06ebae09f78167a52b1b28541521c014"
            />
            <ImageList
              title={data?.name}
              image="https://www.honda-indonesia.com/glide/local/uploads/images/sections_items/f_steeringmodul__1701939157320.jpg?w=1200&s=099d168a92dcb22f12ac71554bea61da"
            />
            <ImageList
              title={data?.name}
              image="https://www.honda-indonesia.com/glide/local/uploads/images/sections_items/meter_cluster__1702043387412.jpg?w=1200&s=e0d1636767a37e81e67b1c0213d4d067"
            />
            <ImageList
              title={data?.name}
              image="https://www.honda-indonesia.com/glide/local/uploads/images/sections_items/f_doorpanel__1701681481583.jpg?w=1200&s=5bcbcb4101ade08c97f60959f5deca8b"
            />
            <ImageList
              title={data?.name}
              image="https://www.honda-indonesia.com/glide/local/uploads/images/sections_items/f_memory__1701578109094.jpg?w=1200&s=ea0ff4c9810e0d066d234e060dccc27d"
            />
            <ImageList
              title={data?.name}
              image="https://www.honda-indonesia.com/glide/local/uploads/images/sections_items/f_frarmrest__1701692725854.jpg?w=1200&s=b38816a9dc76c3ce0447bb9fce446405"
            />
        </GalleryLightBox>
        <div className="container mb-8 mt-14">
          <h3 className="">Exterior</h3>
        </div>
        <GalleryLightBox styles="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <ImageList
              title={data?.name}
              image="https://www.honda-indonesia.com/glide/local/uploads/images/sections_items/red_stitches__1702043300899.jpg?w=1200&s=9d433c8036ff00518db4fcc34d59a206"
            />
            <ImageList
              title={data?.name}
              image="https://www.honda-indonesia.com/glide/local/uploads/images/sections_items/tilt&telescopic__1702043342735.jpg?w=1200&s=06ebae09f78167a52b1b28541521c014"
            />
            <ImageList
              title={data?.name}
              image="https://www.honda-indonesia.com/glide/local/uploads/images/sections_items/f_steeringmodul__1701939157320.jpg?w=1200&s=099d168a92dcb22f12ac71554bea61da"
            />
            <ImageList
              title={data?.name}
              image="https://www.honda-indonesia.com/glide/local/uploads/images/sections_items/meter_cluster__1702043387412.jpg?w=1200&s=e0d1636767a37e81e67b1c0213d4d067"
            />
            <ImageList
              title={data?.name}
              image="https://www.honda-indonesia.com/glide/local/uploads/images/sections_items/f_doorpanel__1701681481583.jpg?w=1200&s=5bcbcb4101ade08c97f60959f5deca8b"
            />
            <ImageList
              title={data?.name}
              image="https://www.honda-indonesia.com/glide/local/uploads/images/sections_items/f_memory__1701578109094.jpg?w=1200&s=ea0ff4c9810e0d066d234e060dccc27d"
            />
            <ImageList
              title={data?.name}
              image="https://www.honda-indonesia.com/glide/local/uploads/images/sections_items/f_frarmrest__1701692725854.jpg?w=1200&s=b38816a9dc76c3ce0447bb9fce446405"
            />
        </GalleryLightBox>
      </section>
      {/* <section className="pt-24">
        <div className="container">
          <h2 className="mb-2">Perfoma</h2>
          <p className="mb-14">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            molestias vitae voluptate tempore illo laudantium, dolorum excepturi
            quis et sequi.
          </p>
        </div>
        <GalleryLightBox>
          <div className="grid grid-cols-2 lg:grid-cols-3">
            <ImageList title={data?.name} image="/pas_foto.jpg" />
            <ImageList title={data?.name} image="/pas_foto.jpg" />
            <ImageList title={data?.name} image="/pas_foto.jpg" />
            <ImageList title={data?.name} image="/pas_foto.jpg" />
            <ImageList title={data?.name} image="/pas_foto.jpg" />
          </div>
        </GalleryLightBox>
      </section> */}
    </>
  );
};

export default Page;
