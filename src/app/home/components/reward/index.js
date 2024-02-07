export const Reward = () => {
    return(
        <div className="grid  grid-cols-2 gap-8   text-gray-900 md:grid-cols-3  dark:text-white px-6">
        <div className="flex flex-col">
          <dt className="mb-2 text-3xl font-extrabold">100+</dt>
          <dd className="text-gray-500 dark:text-gray-400">Penjualan</dd>
        </div>
        <div className="flex flex-col">
          <dt className="mb-2 text-3xl font-extrabold">50+</dt>
          <dd className="text-gray-500 dark:text-gray-400">
            Customer
          </dd>
        </div>
        <div className="flex flex-col">
          <dt className="mb-2 text-3xl font-extrabold">30+</dt>
          <dd className="text-gray-500 dark:text-gray-400">
            Pembelian/Tukar Tambah
          </dd>
        </div>
      </div>
    )
}
