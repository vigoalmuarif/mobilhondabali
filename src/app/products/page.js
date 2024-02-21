// "use client";
import CardProduct from "../../components/card/product";
import { prisma } from "../../lib/client";

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
export const revalidate = 10;

export const metadata = {
  title: 'Products',
  description: 'Mobil Honda Bali Tabanan merupakan salah satu milik sales konsultan Budi Purni Riswanti pada Honda Bintang Tabanan Bali. Terdapat semua type mobil honda mulai dari honda brio, honda hr-v, honda, br-v, city hatchback, wrv, civic, mobilio, accord 2024',
  keywords : ['budi purni riswanti', 'sales mobil honda', 'mobil honda bali', 'promo mobil honda', 'honda bintang tabanan', 'brio', 'brv', 'hrv', 'city hatchback', 'civic', 'mobilio', 'wrv', 'accord', 'mobil honda tabanan'],
}

export default async function Page() {
  const data = await getProducts();
  console.log(data);
  return (
    <>
      {/* heading */}
      <div className="container pt-28">
        <div className="mb-8">
          <h1 className="mb-3">Products</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            corporis sit error eveniet. Architecto, dignissimos!
          </p>
        </div>

        {/* products */}
        <div className="grid grid-cols-2 gap-3 md:gap-5 mt-16 md:grid-cols-3 lg:grid-cols-4 justify-items-start">
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
    </>
  );
}
