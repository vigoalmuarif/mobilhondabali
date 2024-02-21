import Card from "../../components/card/default";
import { TablePrice } from "../../components/table/price";
import { prisma } from "../../lib/client";
import Image from "next/image";
import Link from "next/link";

async function getProducts() {
  const products = await prisma.type.findMany({
    include: {
      models: {
        orderBy: {
          price: "asc",
        },
      },
      _count:{
        select: {models:true}
      }
    },
  });
  return products;
}

export const metadata = {
  title: 'Price List',
  description: 'Pricelist atau daftar harga  mobil honda bali 2024 mulai dari honda brio, honda hr-v, honda, br-v, city hatchback, wrv, civic, mobilio, accord',
  keywords : ['budi purni riswanti', 'sales mobil honda', 'mobil honda bali', 'promo mobil honda', 'honda bintang tabanan', 'brio', 'brv', 'hrv', 'city hatchback', 'civic', 'mobilio', 'wrv', 'accord', 'mobil honda tabanan'],
}

export default async function PriceList() {
  const data = await getProducts();
  return (
    <>
      <section className="container pt-24">
        <h2>Price List</h2>
        <p className="text-lg mt-1 mb-5">Honda Bintang Tabanan Bali 2024</p>
      </section>

      <section className="container">
        {data?.map((item) => (
          <Card key={item.id} className="px-3 py-7 mb-14  lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center">
              <div>
                <h5 className="text-center mb-4">{item.name}</h5>
                <Image
                  src={item.image}
                  width={800}
                  height={800}
                  alt={item.name}
                  className="w-full max-h-72 min-h-40 object-contain rounded-2xl bg-transparent"
                />
              </div>

              <TablePrice data={item.models} count={item._count.models}>
                <div className="mt-4 flex flex-wrap gap-5">
                  <Link href="https://wa.me/6281236011054" className="btnPrimary w-full md:w-auto">
                    Pesan sekarang
                  </Link>
                  <Link href={`/products/${item.slug}`} className="btnSecondary w-full md:w-auto">
                    Lihat Spesifikasi
                  </Link>
                </div>
              </TablePrice>
            </div>
          </Card>
        ))}
      </section>
    </>
  );
}
