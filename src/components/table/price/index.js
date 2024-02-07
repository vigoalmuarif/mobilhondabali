import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import Card from "../../card/default";

export const TablePrice = ({ data, children, count }) => {
  return (
    <>
      <div>
        <Card className="w-full">
          {count === 0 && (
            <div className="text-center py-5">Belum ada model dan harga</div>
          )}

          {count !== 0 && (
            <div className="overflow-x-auto ">
              <Table hoverable className="w-full">
                <TableHead className="">
                  <TableHeadCell className="bg-transparent pl-2 md:pl-3">
                    Model
                  </TableHeadCell>
                  <TableHeadCell className="bg-transparent pl-2 md:pl-3">
                    Harga
                  </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                  {data?.map((item) => (
                    <TableRow
                      key={item.id}
                      className="dark:border-gray-700 dark:bg-gray-800"
                    >
                      <TableCell
                        className={`whitespace-nowrap font-medium text-gray-900 dark:text-white  pl-2 md:pl-3`}
                      >
                        {item.name}
                      </TableCell>
                      <TableCell className=" pl-2 md:pl-3">
                        {new Intl.NumberFormat("id-ID").format(item.price ?? 0)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </Card>
        <div className="mt-5 px-3">
          <p className="text-base font-bold underline underline-offset-8 decoration-primary-500 decoration-2 mb-3">
            Harga Honda Bali
          </p>
          <ul className="list-none pt-2 pb-3 text-sm lg:text-base">
            <li>✔ Harga sewaktu-waktu dapat berubah</li>
            <li>✔ Harga acuan OTR untuk area Pulau Bali termasuk Tabanan</li>
          </ul>
        </div>
        {children}
      </div>
    </>
  );
};
