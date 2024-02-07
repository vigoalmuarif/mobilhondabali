import { PiWhatsappLogoLight, PiChatCircleTextLight } from "react-icons/pi";
import { CiMobile3 } from "react-icons/ci";

import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "flowbite-react";

const CardProfile = () => {
  return (
    <div className="bg-slate border border-slate-200 shadow rounded-3xl max-w-sm py-4 mx-auto text-center">
      <div className="relative mb-5 w-44 h-44 mx-auto">
        <Image
          src="/profile2.png"
          fill
          alt="produk 1"
          className="absolute rounded-full bg-purple-200 shadow drop-shadow-sm outline-dotted outline-offset-4 outline-4 outline-slate-200/90 mx-auto"
        />
      </div>
      <div className="px-5">
        <p className="text-lg text-slate-950 font-bold">
          Budi Purni Riswanti
        </p>
        <p className="text-center font-medium text-slate-600 text-base">
          Sales Konsultan
        </p>
        <div className="bg-primary-100/80 rounded-full py-1.5 px-2.5 inline-flex my-4">
          <div className="flex flaex-wrap gap-2 justify-center">
            <Tooltip content="WhatsApp" style="dark">
              <PiWhatsappLogoLight className="w-6 h-6" />
            </Tooltip>{" "}
            |
            <Tooltip content="Telpon Seluler" style="dark">
              <CiMobile3 className="w-6 h-6" />
            </Tooltip>{" "}
            |
            <Tooltip content="SMS" style="dark">
              <PiChatCircleTextLight className="w-6 h-6" />
            </Tooltip>
          </div>
        </div>
        <Link
          href="https://wa.me/6281236011054"
          className="text-lg text-slate-700 font-semibold block"
        >
          0812 3601 1054
        </Link>
        <div className="aksi mt-6">
          <Link href="https://wa.me/6281236011054" className="w-full btnPrimary">
            WhatsApp sekarang
          </Link>
          <Link href="tel:081236011054" className="w-full mt-4 btnSecondary">
            Panggil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
