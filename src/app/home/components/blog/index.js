import { Badge, Button } from "flowbite-react"
import Image from "next/image"

export const Blogs = () =>{
    return(
      <>
      <div className="bg-slate-100/40 border border-slate-200 shadow rounded-2xl lg:rounded-3xl mx-w-sm pb-4">
      <div className="h-40 md:h-48 mb-2">
        <Image
          src="https://hondabintangtabanan.co.id/wp-content/uploads/2023/09/honda-e-care-malang-627x376.gif"
          height={500}
          width={500}
          alt="produk 1"
          className="bg-tranparent rounded-xl lg:rounded-2xl w-full h-40 md:h-48 object-fill"
        />
      </div>
      <div className="flex flex-wrap justify-between mb-2 px-2 md:px-4">
        <p className="text-xs font-extralight">03/01/2024</p>
        <p className="text-xs font-extralight hidden lg:flex">
          Author : Vigoalmuarif
        </p>
      </div>
      <div className="px-2 md:px-4">
        <p className="text-sm text-slate-900 font-medium truncate">
        PENGERTIAN DAN KEMUDAHAN LAYANAN FITUR DI HONDA E-CARE
        </p>
        <div className="flex gap-2">
          <Badge
            className="bg-slate-200/70 text-slate-700 font-medium mt-2.5"
            size="xs"
          >
            #Teknologi
          </Badge>
          <Badge
            className="bg-slate-200/70 text-slate-700 font-medium mt-2.5"
            size="xs"
          >
            #Brio
          </Badge>
        </div>
        <div className="aksi mt-5">
          <Button color="failure" pill  className="w-full">
            Selengkapnya
          </Button>
        </div>
      </div>
    </div>
      <div className="bg-slate-100/40 border border-slate-200 shadow rounded-2xl lg:rounded-3xl mx-w-sm pb-4">
      <div className="h-40 md:h-48 mb-2">
        <Image
          src="https://hondabintangtabanan.co.id/wp-content/uploads/2023/12/Q7prTdbnYzJ2ucdRRKVehez7GH3BTohBND8lVcLr-627x376.webp"
          height={500}
          width={500}
          alt="produk 1"
          className="bg-tranparent rounded-xl lg:rounded-2xl w-full h-40 md:h-48 object-fill"
        />
      </div>
      <div className="flex flex-wrap justify-between mb-2 px-2 md:px-4">
        <p className="text-xs font-extralight">03/01/2024</p>
        <p className="text-xs font-extralight hidden lg:flex">
          Author : Vigoalmuarif
        </p>
      </div>
      <div className="px-2 md:px-4">
        <p className="text-sm text-slate-900 font-medium truncate">
        TIGA PRODUK UNGGULAN HONDA RAIH PENGHARGAAN DARI CAR AND DRIVER 10 BEST AWARDS 2024 DI AMERIKA SERIKAT
        </p>
        <div className="flex gap-2">
          <Badge
            className="bg-slate-200/70 text-slate-700 font-medium mt-2.5"
            size="xs"
          >
            #Teknologi
          </Badge>
          <Badge
            className="bg-slate-200/70 text-slate-700 font-medium mt-2.5"
            size="xs"
          >
            #Brio
          </Badge>
        </div>
        <div className="aksi mt-5">
          <Button color="failure" pill  className="w-full">
            Selengkapnya
          </Button>
        </div>
      </div>
    </div>
      
      </>
  )
}
