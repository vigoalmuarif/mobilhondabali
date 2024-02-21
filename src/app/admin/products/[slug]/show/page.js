import ContentAdmin from "@/components/layout/admin/content";
import Card from '@/components/card/default/index'
import {prisma} from '@/lib/client'
import Image from "next/image"
import Link from "next/link";


async function getItem(slug){
    const res = await prisma.type.findUnique({
        where:{
            slug: slug
        }
    })

    return res
}

export default async function Page({params : {slug}}){
    const data = await getItem(slug)
    return(
        <ContentAdmin title="">
            <div className="flex flex-wrap space-y-8 justify-between">
                <div className="w-full md:w-5/12 self-start">
                    <Card>
                        <Card.Header>
                            <div className="bg-slate-200 rounded-xl md:rounded-2xl">
                                <Image width={300} height={300} src={data?.image} className="max-h-60 w-full object-contain mx-auto rounded-xl md:rounded-2xl" />
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <h6 className="ms-2 mt-2 mb-3">{data?.name}</h6>
                            <p>{data?.desc}</p>
                            <button className="btnSecondary mt-5">Ubah</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="w-full md:w-6/12">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        <Link href="/#" className="w-full py-6 text-center bg-green-100 border border-green-300 rounded-xl hover:bg-green-200 hover:border-green-400"><h6 className="">Model</h6>
                        <p className="text-xs">0</p>
                        </Link>
                        <Link href="/#" className="w-full py-6 text-center bg-amber-100 border border-amber-300 rounded-xl hover:bg-amber-200 hover:border-amber-400"><h6 className="">Warna</h6>
                        <p className="text-xs">0</p>
                        </Link>
                        <Link href="/#" className="w-full py-6 text-center bg-purple-100 border border-purple-300 rounded-xl hover:bg-purple-200 hover:border-purple-400"><h6 className="">Featured</h6>
                        <p className="text-xs">0</p>
                        </Link>
                        <Link href="/#" className="w-full py-6 text-center bg-rose-100 border border-rose-300 rounded-xl hover:bg-rose-200 hover:border-rose-400"><h6 className="">Desain</h6>
                        <p className="text-xs">0</p>
                        </Link>
                        <Link href="/#" className="w-full py-6 text-center bg-blue-100 border border-blue-300 rounded-xl hover:bg-blue-200 hover:border-blue-400"><h6 className="">Gambar Lainnya</h6>
                        <p className="text-xs">0</p>
                        </Link>
                        <Link href="/#" className="w-full py-6 text-center bg-lime-100 border border-lime-300 rounded-xl hover:bg-lime-200 hover:border-lime-400"><h6 className="">Meta Data</h6>
                        <p className="text-xs">0</p>
                        </Link>
                    </div>
                </div>
            </div>
        </ContentAdmin>
    )
}