import CardProfile from "./profile"

export const Konsultasi = () =>{
    return(
        <div className="container flex items-start flex-wrap gap-y-8 pt-24 space-y-10 lg:space-y-0">
          <div className="w-full self-center md:w-1/2 md:pr-6">
            <h2 className="text-center mb-3">Konsultasi</h2>
            <p className="text-center text-lg">
            Dapatkan informasi ulasan spesifikasi dan harga dari setiap produk Honda, seperti Honda Odyssey, Honda Brio, Honda Mobilio, Honda Jazz, Honda HR-V, Honda BR-V, Honda CR-V, Civic Type R, Civic Turbo, Honda City, Honda Accord, Civic Hatchback untuk wilayah Pulau Bali.
            </p>
          </div>
          <div className="w-full self-center md:w-1/2">
            <CardProfile />
          </div>
        </div>
    )
}