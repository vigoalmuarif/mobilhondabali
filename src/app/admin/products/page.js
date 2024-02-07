import { Dropdown, DropdownItem } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import ContentAdmin from "@/components/layout/admin/content";
import { prisma } from "@/lib/client"

async function getItems() {
  const types = await prisma.type.findMany({
    include: {
      _count: {
        select: {
          models: true,
          colors: true,
        },
      },
    },
  });

  return types;
}

export default async function Page() {
  const data = await getItems();
  return (
    <ContentAdmin title="Dashboard">
      <div className="relative overflow-x-auto  rounded-2xl lg:rounded-3xl border border-slate-200">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            <div className="flex justify-between items-center mb-3">
              Our products
              <Link href="/admin/products/create" className="btnPrimary">Tambah Type</Link>
            </div>
            <div className="md:max-w-2xl">
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                Browse a list of Flowbite products designed to help you work and
                play, stay organized, get answers, keep in touch, grow your
                business, and more.
              </p>
            </div>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Tipe
              </th>
              <th scope="col" className="px-6 py-3">
                Varian
              </th>
              <th scope="col" className="px-6 py-3">
                Warna
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Kelola</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th scope="row" className="px-6 py-4 hover:text-primary-500">
                  <Link
                    href={`/products/${item.slug}`}
                    target="_blank"
                    className="flex items-center  text-gray-900  whitespace-nowrap dark:text-white hover:text-primary-500"
                  >
                    <Image
                      width={200}
                      height={200}
                      className="w-12 h-12 rounded-full object-contain"
                      src={item.image}
                      alt={item.name}
                    />

                    <div className="ps-3">
                      <div className="text-base font-semibold pe-3 md:pe-0 ">
                        {item.name}
                      </div>
                    </div>
                  </Link>
                </th>
                <td className="px-6 py-4">{item._count.models}</td>
                <td className="px-6 py-4">{item._count.colors}</td>
                <td className="px-6 py-4">
                  <Dropdown dismissOnClick={false} label="kelola" className="" inline>
                    <DropdownItem as="a" href={`/admin/type/${item.slug}`} target="_blank">
                      Ubah
                    </DropdownItem>
                    <DropdownItem
                      className="text-primary-500"
                    >
                      Hapus
                    </DropdownItem>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ContentAdmin>
  );
}
